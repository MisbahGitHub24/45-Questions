"use strict";
function makeAlbum(artist, title, tracks) {
    let album = {
        tracks: tracks,
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = makeAlbum('Sun Raha Hai', 'Ankit Tiwari');
let album2 = makeAlbum('Lata Mangeshkar', 'Lata in Concert');
let album3 = makeAlbum('A. R. Rahman', 'Vande Mataram', 10);
console.log(album1);
console.log(album2);
console.log(album3);
