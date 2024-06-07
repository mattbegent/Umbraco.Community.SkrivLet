namespace BegeWrite
{
	public class BegeWriteBlock<T> : BegeWriteBlockBase
	{
		public BegeWriteBlock(string id, string type)
		{
			Id = id;
			Type = type;
		}

		public T Data { get; set; }
	}
}
