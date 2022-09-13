export const dateFormat = ({ ...date }) => {
    if (date.month < 9) {
        date.month = `0${date.month + 1}`;
    } else {
        date.month = date.month + 1;
    }

    if (date.date < 10) {
        date.date = `0${date.date}`;
    }

    return `${date.date}-${date.month}-${date.year}`;
};

export const takeDecimalNumber = (num, n) => {
    //num : số cần xử lý
    //n: số chữ số sau dấu phẩy cần lấy
    let base = 10 ** n;
    let result = Math.round(num * base) / base;
    return result;
};

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
});

export const formatDuration = (time) => {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
    } else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`;
    }
};
