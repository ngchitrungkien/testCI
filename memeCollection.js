class memeCollection {
    name;
    memes; //lưu trữ các instances của class meme
    dateModified;

    constructor(name) {
        this.name = name;
        this.dateModified = new Date().toLocaleString();
        this.memes = [];
    }

    /**
     * thêm meme vào trong collection
     * @param Meme meme 
     */
    add(meme) {
        this.memes.push(meme);
    }

    delete(index) {
        let deletedMeme = this.memes[index];
        this.memes.splice(index, 1);

        return deletedMeme;
    }

    update(index,data) {
        this.memes[index].update(data);
    }

    show() {
        let html = "";
        for (let meme of this.memes) {
            html += meme.toHTML()
        }

        document.querySelector('#app').innerHTML = html;
    }
}

// BTVN: Xác định Abstract, Polymorrphison, Encapsulation
// Quản lý: lớp môn học, SV, giáo viên, môn học
// Tạo khung 