using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Umbraco.Community.SkrivLet
{
    public static class SkrivLetExtensions
    {
        public static async Task<IHtmlContent> RenderBegeWrite(this IHtmlHelper html, SkrivLetModel model)
        {
            return await html.PartialAsync("~/Views/Partials/SkrivLet/Blocks.cshtml", model);
        }
    }
}
