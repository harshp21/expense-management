const useFormatter = () => {

    const moneyFormatter = (num) => {
        let p = num.toFixed(2).split('.');
        return (
            '$ ' +
            p[0]
                .split('')
                .reverse()
                .reduce((acc, num, i) => {
                    return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
                }, '') +
            '.' +
            p[1]
        );
    }

    return { moneyFormatter };

}

export default useFormatter
