class addReview extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <form action="" id="reviewResto" metod="get">
            <div class="input-wrapper">
                <input
                    type="text"
                    id="name"
                    class="form-control"
                    placeholder="Enter your name"
                    name="name"
                />
                <label for="name" class="control-label">Name</label>
            </div>

            <div class="input-wrapper">
                <textarea
                    name="review"
                    id="review"
                    class="form-control"
                    placeholder="Enter your review"
                    name="review"
                ></textarea>

                <label for="review" class="control-label">Review</label>
            </div>

            <button type="submit" class="btn btn-submit" id="btn-submit">Submit</button>
        </form>
        `;
    }
}
customElements.define('add-review', addReview);
