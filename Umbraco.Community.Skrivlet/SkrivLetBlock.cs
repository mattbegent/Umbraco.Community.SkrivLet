namespace Umbraco.Community.SkrivLet
{
	public class SkrivLetBlock<T> : SkrivLetBlockBase
	{
		public SkrivLetBlock(string id, string type)
		{
			Id = id;
			Type = type;
		}

		public T Data { get; set; }
	}
}
