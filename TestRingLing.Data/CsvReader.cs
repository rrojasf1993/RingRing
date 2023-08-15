using CsvHelper;
using CsvHelper.Configuration;
using System.Globalization;

namespace TestRingLing.Data;
public class CsvReader<T>:ICsvReader<T> where T: class
{

    public IEnumerable<T> GetDataFromCsvFile(string path)
    {
        IEnumerable<T> records=null;
        var config = new CsvConfiguration(CultureInfo.InvariantCulture)
        {
            HasHeaderRecord = false,
        };
        using (var reader = new StreamReader(path))
        { 
          CsvReader csv = new CsvReader(reader, config);
          records= csv.GetRecords<T>().ToList();
        }
        return records;
    }
}

