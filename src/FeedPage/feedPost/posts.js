
import mozart_img from './mozart.jpg'
import rach_img from './rach.jpg'
import chopin_img from './chopin.jpg'
import beethoven_img from './beethoven.jpg'
import dvorak_img from './Dvorak.jpg'
import bach_img from './Johann_Sebastian_Bach.jpg'
import sibelius_img from './sibelius.jpg'
import faure_img from './faure.jpg'
import brahms_img from './brahms.jpg'
import tchaikovsky_img from './tchaikovsky.jpg'

const posts = [
{id : 0, composer : 'Rachmaninoff', time : '1900 ', text : 'Piano concerto No.2',comments: [{commentId: 0, commentText : "That's the best piece ever!" ,commentAuthor : "CoolPianist"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: rach_img, likes: 240},
{id : 1, composer : 'Beethoven', time : '1824', text : 'Symphony no. 9',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img :1, img: beethoven_img, likes: 6556},
{id : 2, composer : 'J. S. Bach', time : '1727', text : 'Ich habe genug',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: bach_img, likes: 50},
{id : 3, composer : 'Chopin', time : '1847', text : 'Ealz No.2 op.64',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img:chopin_img, likes: 100},
{id : 4, composer : 'Mozart', time : '1791', text : 'Requiem',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: mozart_img, likes: 130},
{id : 5, composer : 'Dvorak', time : '1893', text : 'Symphony no. 9',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img:dvorak_img, likes: 998},
{id : 6, composer : 'Brahms', time : '1885', text : 'Symphony No. 4',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: brahms_img, likes: 20},
{id : 7, composer : 'Tchaikovsky', time : '1893', text : 'Symphony No. 6',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img:tchaikovsky_img, likes: 278},
{id : 8, composer : 'Sibelius', time : '1904', text : 'Violin concerto',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img: sibelius_img, likes: 30},
{id : 9, composer : 'Faure', time : '1888', text : 'Pavane',comments: [{commentId: 0, commentText : "cool!" ,commentAuthor : "Mozart"}, {commentId: 1, commentText : "nice!" ,commentAuthor : "Arnon"}], contains_img: 1, img:faure_img, likes: 453}
];

export default posts;