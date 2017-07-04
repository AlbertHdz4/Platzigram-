// plural debido a que son varios elementos
module.exports = {
  likes: '{ likes, plural, ' +
            '=0 { no likes }' +
            '=1 { # likes }' +
            'other { # likes }}'
}
