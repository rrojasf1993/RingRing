using System;
namespace TestRingLing.Data
{
	public interface ICsvReader<T>
	{
        IEnumerable<T> GetDataFromCsvFile(string path);
    }
}

