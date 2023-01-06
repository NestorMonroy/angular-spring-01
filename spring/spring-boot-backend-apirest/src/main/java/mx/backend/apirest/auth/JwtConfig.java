package mx.backend.apirest.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";
	public static final String RSA_PRIVADA ="-----BEGIN RSA PRIVATE KEY-----\n"
			+ "MIIEpQIBAAKCAQEA4/aSPqZy/TLDd/6VMRR1bLxcrofchSCvSAghjQs6GD5Vd/jk\n"
			+ "Z8jUeNJY9osaHCQ3ezmb1GJYa8aTanXDFES68MvuLZFhe54Y8riZNLZ7pXAFh0TL\n"
			+ "3Cv93aWnXmqsgwHfZquv1XR5wogYKMmN1xfZlfqKmf3PExmYIaGANJ03+/uPkXhK\n"
			+ "eMcugLpo8/IHBwXrrdpzQh7sehPSpJFhIzKMEPxQNROo9eDBnm6DNajo0qKbMg3X\n"
			+ "HQErN0R/oSxcSwPrDp6KsJ/eoa+L7tMabG6jUZvtXWPaer+ShgRNIcxmcfzyRHFD\n"
			+ "AM1eFgj3FfGhfpVQwwmdaRcF5Hfv8ZvgicQp3QIDAQABAoIBAF5lghWTU1ZpqOuN\n"
			+ "bjYOpLlMHozfEX/HEw4e39XJ6lqTpUyysdIQJXuKjvA4la1Fifvq1Q5TUw3+Apk4\n"
			+ "/njsJQUFTTFtXBKWWvpXWomrbvQIuSFUaZ5YUR1xNScxwRHWuq2HNp6LRsg5Ftf8\n"
			+ "7lE9PQqP3sj5gsAD/y0d9TrUR5R9xK7SY8xqoR53zU6kzbEoBbQA2yLi7kTIwulG\n"
			+ "YQoSRCq8PFTOurX3UyiWy2iKVXt1qufwW0P4AIJoTXa4lpkwOzn2Zl1vOSEmMem9\n"
			+ "3VWqBOcIPUatAfwIfMyNkrh9rGbqR4bbFySh/8cJz6U6pcrQ35nw+Tfli/nnz/5z\n"
			+ "GVZcSjkCgYEA+69m9VbILYFLzqV3VpRszJIGXMyPDLBdG7+iZsuQvDhsz1ErCIeJ\n"
			+ "K6BtS8s3OwdZ4uRdcUlBb02JITIWoM2N/vV5kMtrUMTPi8qwgE9Fsvg5a+NunjoP\n"
			+ "MIlwIXu1vDsS1r+sGc0yi/b9Kl9Rphf2wrOUQ856PYxL3NDqOO1o2zcCgYEA598O\n"
			+ "zG/pLgDDS/fv+rTqrGZiPH8gcAGkrk9FoQFJWC9Xwv0fjTy5CjEnAZO1JTifp0oh\n"
			+ "VyCGF56PWr7LpmFqyX7DW4zRyFOgmVaHn0TXoztR0yjsayBPP/+JjjT63bbvtOll\n"
			+ "/4csOKaudeE5CV39trqcNEJFqHvoScgWHvwDdYsCgYEAm1ah5DCgsj1IDY3gvwYy\n"
			+ "tHw4AxSaAcnkXZkEYg+oEBN/TOGa/tOwXMXST2Jofz1FRB2Qcrg0875WMa/ZeXwE\n"
			+ "9OSLGEwEu0ANnQkHsNm8ef5samNfxbat41YgZ/oTq86GDRcV4ILefLZ/gKR+H1ZR\n"
			+ "DdCKZONOXSh3Nh2XQnV9LzcCgYEApZuTHkDv8oNo+WFkbVO6KNgXYc4KhPUngbfs\n"
			+ "q0oX8Hwf2oyfdGjiYH0qtt2gi60dmoY/udLo8wW0rcOIAJWjh7aaIVE6pDHWiq5a\n"
			+ "v06UFWnQz1hzQzAYakVBIeiFJMX7/uKUjyUkWHH0OQ1bh20yQMiXuFt9FREqn0fh\n"
			+ "RNAKSHECgYEA0Ms1iVQ/smPoOYbmStOBtLO4BqTz1DPB7oVivMRDYfzH2oLJEsS0\n"
			+ "+0doMOWWTchAU/EKO4kvIznqqX6trqSw11dZQqIOoP2W5MruOVNwdh94E0x9+N1c\n"
			+ "P75spEUxfPzKDvAsBeIOWqz69RIoQojIJIIpUAQ18tziljU/ImFIkC4=\n"
			+ "-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\n"
			+ "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4/aSPqZy/TLDd/6VMRR1\n"
			+ "bLxcrofchSCvSAghjQs6GD5Vd/jkZ8jUeNJY9osaHCQ3ezmb1GJYa8aTanXDFES6\n"
			+ "8MvuLZFhe54Y8riZNLZ7pXAFh0TL3Cv93aWnXmqsgwHfZquv1XR5wogYKMmN1xfZ\n"
			+ "lfqKmf3PExmYIaGANJ03+/uPkXhKeMcugLpo8/IHBwXrrdpzQh7sehPSpJFhIzKM\n"
			+ "EPxQNROo9eDBnm6DNajo0qKbMg3XHQErN0R/oSxcSwPrDp6KsJ/eoa+L7tMabG6j\n"
			+ "UZvtXWPaer+ShgRNIcxmcfzyRHFDAM1eFgj3FfGhfpVQwwmdaRcF5Hfv8ZvgicQp\n"
			+ "3QIDAQAB\n"
			+ "-----END PUBLIC KEY-----";
}
