export function domainType(domains: string[]): string[] {
    var result = []
    domains.forEach((element) => {
        var arr = element.split(".")
        result.push(arr[arr.length-1])
    })
    result.forEach((tld, index) =>{
        switch(tld){
            case 'org':
                result[index] = 'organization';
                break;
            case 'com':
                result[index] = 'commercial'
                break;
            case 'net':
                result[index] = 'network'
                break;
            case 'info':
                result[index] = 'information'
                break;
        }
    })
    
    return result
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));