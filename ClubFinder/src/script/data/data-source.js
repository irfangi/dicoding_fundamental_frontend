import clubs from './clubs.js'

// function DataSource(onSuccess, onFailed) {
//     this.onSuccess = onSuccess;
//     this.onFailed = onFailed;
// }

// DataSource.prototype.searchClub = function (keyword) {
//     const filteredClubs = clubs.filter((club) => {
//         return club.name.toUpperCase().includes(keyword.toUpperCase());
//     });

//     if (filteredClubs.length) {
//         this.onSuccess(filteredClubs);
//     } else {
//         this.onFailed(`${keyword} is not found`);
//     }
// };

class DataSource{
    // callback
    // constructor (onSuccess, onFailed){
    //     this.onSuccess = onSuccess;
    //     this.onFailed = onFailed;
    // }
    // searchClub(keyword){
    //     const filteredClubs = clubs.filter((club) => {
    //         return club.name.toUpperCase().includes(keyword.toUpperCase());
    //     });
    //     if (filteredClubs.length) {
    //         this.onSuccess(filteredClubs);
    //     } else {
    //         this.onFailed(`${keyword} is not found`);
    //     }
    // }
    
    // promise
    // menggunakan static agar tidak butuh constructor
    static searchClub = keyword => {
        return new Promise((resolve, reject) =>{
            const filteredClubs = clubs.filter((club) => {
                return club.name.toUpperCase().includes(keyword.toUpperCase());
            });
            if (filteredClubs.length) {
                resolve(filteredClubs);
            } else {
                reject(`${keyword} is not found`);
            }
        });
    }
}

export default DataSource;