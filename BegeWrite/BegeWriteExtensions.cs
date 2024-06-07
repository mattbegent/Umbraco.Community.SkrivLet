using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace BegeWrite
{
    public static class BegeWriteExtensions
    {
        public static async Task<IHtmlContent> RenderBegeWrite(this IHtmlHelper html, BegeWriteModel model)
        {
            return await html.PartialAsync("~/Views/Partials/BegeWrite/Blocks.cshtml", model);
        }
    }
}
