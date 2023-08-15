using TestRingLing.Cross.DTO;
using TestRingLing.Data;
using TestRingLing.Services;

namespace TestRingLing.Services
{
public class CustomerService:IService<Customer>
{
    private readonly ICsvReader<Customer> _csvReader ;
    public CustomerService( ICsvReader<Customer> csvReader)
    {
            _csvReader = csvReader;
    }
    public IEnumerable<Customer> GetData()
    {
        string path = $"{Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().Location)}/Files/customer.csv";
        var customerData=this._csvReader.GetDataFromCsvFile(path);
        return customerData;
    }
}

}