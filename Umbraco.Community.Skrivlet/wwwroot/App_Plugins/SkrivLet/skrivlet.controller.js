angular.module('umbraco').controller('SkrivLetController', function ($scope, editorService, editorState, overlayService, eventsService) {

    class RenderHelper {

        static randomUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        static createLabel(id, cssClass, text) {
            const label = document.createElement('label');
            label.innerHTML = text;
            label.classList.add(cssClass);
            label.setAttribute('for', id);
            return label;
        }

        static createInput(id, value, text, type) {
            const input = document.createElement('input');
            input.setAttribute('type', type);
            if (value) {
                input.setAttribute('value', value);
            }
            if (text) {
                input.setAttribute('placeholder', text);
            }
            input.setAttribute('id', id);
            input.classList.add('cdx-input');
            return input;
        }

    }

    class UmbracoLinkTool {

        static get isInline() {
            return true;
        }

        get state() {
            return this._state;
        }

        set state(state) {
            this._state = state;

            this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
        }

        static get sanitize() {
            return {
                a: {
                    href: true
                }
            };
        }

        constructor({ api }) {
            this.api = api;
            this.button = null;
            this._state = false;
            this.element = null;

            this.tag = 'A';
            this.class = 'cdx-link';
        }

        render() {
            this.button = document.createElement('button');
            this.button.type = 'button';
            this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"></path><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"></path></svg>';
            this.button.classList.add(this.api.styles.inlineToolButton);
            return this.button;
        }

        surround(range) {
            if (this.state) {
                this.unwrap(range);
                return;
            }

            this.openLinkPicker(range);
        }

        wrap(range, url) {

            const selectedText = range.extractContents();
            const link = document.createElement(this.tag);

            link.classList.add(this.class);
            link.setAttribute('href', url);
            link.appendChild(selectedText);
            range.insertNode(link);

            this.api.selection.expandToTag(link);
            this.element = link;
        }

        unwrap(range) {
            const link = this.api.selection.findParentTag(this.tag, this.class);
            const text = range.extractContents();

            link.remove();

            range.insertNode(text);
        }


        checkState() {
            const link = this.api.selection.findParentTag(this.tag);
            this.state = !!link;
        }

        openLinkPicker(range) {
            editorService.linkPicker({
                multiPicker: false,
                submit: (result) => {
                    editorService.close();
                    if (result.target.udi) {
                        this.wrap(range, result.target.udi);
                    } else {
                        this.wrap(range, result.target.url);
                    }

                },
                close: () => {
                    editorService.close();
                }
            });
        }

    }

    class UmbracoImageTool {

        static get toolbox() {
            return {
                title: 'Image',
                icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>'
            };
        }

        constructor({ data, api, config }) {
            this.api = api;
            this.config = config || {};
            this.data = {
                url: data.url || '',
                alt: data.alt || '',
                udi: data.udi || ''
            };

            this.wrapper = undefined;
            this.input = undefined;
            this.altTextLabel = undefined;
            this.altTextInput = undefined;
            this.image = undefined;
            this.button = undefined;
        }

        render() {
            this.wrapper = document.createElement('div');
            this.input = document.createElement('input');
            this.input.setAttribute('type', 'hidden');

            const altTextID = RenderHelper.randomUUID();
            this.altTextLabel = RenderHelper.createLabel(altTextID, 'sr-only', 'Alt text');
            this.altTextInput = RenderHelper.createInput(altTextID, this.data.alt, 'Enter alt text', 'text');

            this.wrapper.classList.add('simple-image');

            this._createImage(this.data.url);

            this.button = document.createElement('button');
            this.button.type = 'button';
            this.button.classList.add('umb-group-builder__group-add-property');
            this.button.textContent = this.data && this.data.url ? "Change image" : "Select an image";
            this.button.addEventListener('click', () => {
                this._openMediaPicker();
            });
            this.image.addEventListener('click', () => {
                this._openMediaPicker();
            });
            this.wrapper.appendChild(this.altTextLabel);
            this.wrapper.appendChild(this.altTextInput);
            this.wrapper.appendChild(this.button);
            this.wrapper.appendChild(this.input);

            return this.wrapper;
        }

        _openMediaPicker() {

            editorService.mediaPicker({
                onlyImages: true,
                multiPicker: false,
                submit: (item) => {
                    const imageUrl = item.selection[0].image;
                    const imageAlt = item.selection[0].name;
                    this.data.url = imageUrl;
                    this.data.alt = imageAlt;
                    this.data.udi = item.selection[0].udi;
                    this.data.width = parseInt(item.selection[0].width); // sometimes a string for some reason?
                    this.data.height = parseInt(item.selection[0].height);
                    this.input.value = imageUrl;
                    this.image.src = imageUrl;
                    this.image.alt = imageAlt;
                    this.altTextInput.value = imageAlt;
                    this.button.textContent = this.data && this.data.url ? "Change image" : "Select an image";
                    //this.render();
                    this.save();
                    editorService.close();
                    setTimeout(() => {
                        this.image.scrollIntoView();
                    }, 200);

                },
                close: () => {
                    editorService.close();
                }
            });

        }

        _createImage(url) {

            this.image = document.createElement('img');

            this.image.src = url;
            this.image.alt = this.data.alt;

            this.wrapper.appendChild(this.image);
        }

        save(blockContent) {
            return {
                url: this.data.url,
                alt: this.altTextInput.value,
                udi: this.data.udi,
                width: this.data.width,
                height: this.data.height
            };
        }

    }

    class EmbedWithUI extends Embed {
        static get toolbox() {
            return {
                title: 'Video',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube w-6 h-6 mx-1"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>'
            };
        }

        render() {
            if (!this.data.service) {
                const container = document.createElement('div');
                this.element = container;

                const label = RenderHelper.createLabel('embed-input', 'cdx-label', 'Enter a URL to embed a video from YouTube or Vimeo');
                container.appendChild(label);

                const input = RenderHelper.createInput('embed-input', '', '', 'url');
                input.addEventListener('paste', (event) => {
                    const url = event.clipboardData.getData('text');
                    const service = Object.keys(Embed.services).find((key) => Embed.services[key].regex.test(url));
                    if (service) {
                        this.onPaste({ detail: { key: service, data: url } });
                    }
                });
                container.appendChild(input);

                return container;
            }
            return super.render();
        }

        validate(savedData) {
            return savedData.service && savedData.source ? true : false;
        }
    }

    var editor = null;
    var initData = $scope.model.value ? $scope.model.value : {}

    function init() {
        if(dataIsDifferentFromLocalStorage()) {
            var options = {
                title: 'You have content that has not been saved',
                content: 'Do you want to load the last unsaved content?',
                disableBackdropClick: true,
                disableEscKey: true,
                confirmType: 'save',
                submit: function () {
                    initData = getFromLocalStorage();
                    loadEditorJS();
                    overlayService.close();
                },
                close: function () {
                    loadEditorJS();
                    overlayService.close();
                }
            };
            overlayService.confirm(options);
        } else {
            loadEditorJS();
        }

        eventsService.on('content.saved', function (evt, data) {
            console.log('save');
            console.log(data.content);
            clearLocalStorage();
        })
    }

    init();

    function loadEditorJS() {

        editor = new EditorJS({

            holder: 'editorjs',

            placeholder: "Type '/' to insert a block or just start typing something super...",

            data: initData,

            inlineToolbar: true,

            // TODO: Not working
            sanitizer: {
                a: {}
            },

            tools: {
                embed: {
                    class: EmbedWithUI,
                    config: {
                        services: {
                            youtube: true,
                            vimeo: true
                        }
                    }
                },
                header: Header,
                image: UmbracoImageTool,
                quote: Quote,
                code: CodeTool,
                raw: RawTool,
                list: {
                    class: List,
                    inlineToolbar: true
                },
                checklist: Checklist,
                link: UmbracoLinkTool // override link with Umbraco link picker
            },

            onChange: (api, event) => {
                console.log('On change');
                stopUmbracosInterferingHotKeys();
                editor.save().then((outputData) => {
                    const jsonData = JSON.stringify(outputData);
                    $scope.model.value = jsonData;
                    saveToLocalStorage(jsonData);
                }).catch((error) => {
                    console.log('Saving failed: ', error);
                });

            },

            onReady: () => {
                new DragDrop(editor);
                stopUmbracosInterferingHotKeys();
            },

        });
    }

    function dataIsDifferentFromLocalStorage() {

        const modelValue = $scope.model.value;
        const storedData = getFromLocalStorage();

        if(!modelValue || !storedData) {
            return false;
        }

        const modelValueFormatted = modelValue;
        delete modelValueFormatted.time;
        delete modelValueFormatted.version;
        const storedDataFormatted = storedData;
        delete storedDataFormatted.time;
        delete storedDataFormatted.version;
        return JSON.stringify(modelValueFormatted) !== JSON.stringify(storedDataFormatted);
    }

    function getStorageKey() {
        return 'Skrivlet.Block.' + editorState.current.id;
    }

    function saveToLocalStorage(data) {
        try {
            localStorage.setItem(getStorageKey(), data);
        } catch (e) {
            console.log('Failed to save data to local storage', e);
        }
    }

    function clearLocalStorage() {
        localStorage.removeItem(getStorageKey());
    }

    function getFromLocalStorage() {
        const localData = localStorage.getItem(getStorageKey());
        if (!localData) {
            return null;
        }
        return JSON.parse(localData);
    }

    // See: https://github.com/umbraco/Umbraco-CMS/pull/7186/files
    function stopUmbracosInterferingHotKeys() {
        const editableElements = document.querySelectorAll('.cdx-block:not([disable-hotkeys="true"])');
        for (let index = 0; index < editableElements.length; index++) {
            const element = editableElements[index];
            element.setAttribute('disable-hotkeys', 'true');
        }
    }

});
