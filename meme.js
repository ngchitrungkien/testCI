class Meme {
    name;
    description;
    image;
    dateModified;

    constructor(name,image,description = null) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.dateModified = new Date().toLocaleString; // tạo meme ở thời điểm nào thì dateModified là thời điểm đấy
    }

    /**
     * cập nhật thông tin cho meme
     * @param {*} data 
     */
    update(data) {
        if (data.name) this.name = data.name;
        if (data.image) this.image = data.image;
        if (data.description) this.description = data.description;

        this.dateModified = new Date().toLocaleString;
    }

    /**
     * chuyển đổi meme về dạng html
     * @returns string html
     */
    // convert meme hiện tại -> thẻ trong HTML
    toHTML() {
        return `
        <div class='meme-container'>
            <h3>${this.name}</h3>
            <img src='${this.image}' alt='${this.description}'>
            <small>Date modified: ${this.dateModified}</small>
        </div>
        `
    }
}