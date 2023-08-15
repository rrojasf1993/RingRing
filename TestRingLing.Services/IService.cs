using System;
using TestRingLing.Cross.DTO;

namespace TestRingLing.Services
{
	public interface IService<T> where T:class
	{
        public IEnumerable<T> GetData();

    }
}

