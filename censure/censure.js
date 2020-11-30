export default class Censure {
    isValid(message) {
        const symbolCensure = '*',
            words = ['нарко', 'алко'],
            arr = words.map((word) => {
                return message.indexOf(word)
            });
        return "Valid is " + (arr.find((index) => index === -1) ? false : true) + '\n' + 'Message: ' + message.replace(new RegExp(words.join('|'), 'gi'), word => symbolCensure.repeat(word.length));
    }
}
