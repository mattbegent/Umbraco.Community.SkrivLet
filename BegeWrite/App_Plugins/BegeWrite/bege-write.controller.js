angular.module('umbraco').controller('BegeWriteController', function ($scope, editorService) {

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

    // TODO: href are being removed!!!!!!!
    static get sanitize() {
      return {
        a: {
          class: 'cdx-link'
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
          this.wrap(range, result.target.url);
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

    /**
     * Automatic sanitize config
     * @see {@link https://editorjs.io/sanitize-saved-data}
     */
    // static get sanitize() {
    //   return {
    //     url: {},
    //     img: {}
    //   }
    // }

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
      this.image = undefined;
      this.button = undefined;
    }

    render() {
      this.wrapper = document.createElement('div');
      this.input = document.createElement('input');
      this.input.setAttribute('type', 'hidden');
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
      this.wrapper.appendChild(this.button);
      this.wrapper.appendChild(this.input);

      return this.wrapper;
    }

    _openMediaPicker() {

      editorService.mediaPicker({
          onlyImages: true,
          multiPicker: false,
          submit: (item)=> {
            console.log(item);
            const imageUrl = item.selection[0].image;
            const imageAlt = item.selection[0].name;
            this.data.url = imageUrl;
            this.data.alt = imageAlt;
            this.data.udi = item.selection[0].udi;
            this.input.value = imageUrl;
            this.image.src = imageUrl;
            this.image.alt = imageAlt;
            this.button.textContent = this.data && this.data.url ? "Change image" : "Select an image";
            //this.render();
            this.save();
            editorService.close();
            console.log(this.api);
            setTimeout(()=> {
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
        alt: this.data.alt,
        udi: this.data.udi
      };
    }

  }

  const editor = new EditorJS({

    holder: 'editorjs',

    placeholder: 'Type here and write something super!',

    data: $scope.model.value ? $scope.model.value : {},

    inlineToolbar: true,

    // TODO: Not working
    sanitizer: {
      a: {}
    },

    tools: {
      embed: {
        class: Embed,
        inlineToolbar: true
      },
      header: Header,
      image: UmbracoImageTool,
      quote: Quote,
      code: CodeTool,
      raw: RawTool,
      list: List,
      checklist: Checklist,
      link: UmbracoLinkTool // override link with Umbraco link picker
    },

    onChange: (api, event) => {
      editor.save().then((outputData) => {
        $scope.model.value = JSON.stringify(outputData);        
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
    }

  })

});
