using System;
using CsvHelper.Configuration.Attributes;

namespace TestRingLing.Cross.DTO
{
	public class Customer
	{
        [Name("OFFICE_COUNTRY_PREFIX")]
        public string OfficeCountryPrefix { get; set; }
        [Name("OFFICE_PHONE")]
        public string OfficePhone { get; set; }
        [Name("OFFICE_EXTENSION")]
        public string OfficeExtension { get; set; }
        [Name("MOBILE_COUNTRY_PREFIX")]
        public string MobileConutryPrefix { get; set; }
        [Name("MOBILE_PHONE")]
        public string MobilePhone { get; set; }
        [Name("FULL_NAME")]
        public string FullName { get; set; }
        [Name("DEPARTMENT")]
        public string DepartmentJobTitle { get; set; }
        [Name("COMPANY_TYPE")]
        public string CompanyType { get; set; }
        [Name("JOB_TITLE")]
        public string JobTitle { get; set; }
        [Name("COMPANY_ID")]
        public string CompanyId { get; set; }
        [Name("COMPANY_NAME")]
        public string CompanyName { get; set; }
        [Name("COMPANY_CODE")]
        public string CompanyCode { get; set; }
        [Name("ARRIVE_SALESPERSON_USER_CODE")]
        public string ArriveSalesPersonUserCode { get; set; }
        [Name("ARRIVE_SALESPERSON_FULL_NAME")]
        public string ArriveSalesPersonUserName { get; set; }
        [Name("ALL_TIME_VOLUME")]
        public string AllTimeVolume{ get; set; }
        [Name("FIRST_LOAD_DATE")]
        public string FirstLoadDate { get; set; }
        [Name("LAST_LOAD_DATE")]
        public string LastLoadDate { get; set; }
        [Name("STATUS")]
        public string Status { get; set; }

    }
}

