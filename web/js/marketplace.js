document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("marketplaceSearch");
    const searchButton = document.getElementById("searchButton");
    const productCards = document.querySelectorAll(".product-card");
    const categoryCards = document.querySelectorAll(".category-card");

    // ==============================
    // SEARCH PRODUCTS
    // ==============================

    function searchProducts() {

        const searchText = searchInput.value.toLowerCase().trim();

        productCards.forEach(function (card) {

            const cardText = card.innerText.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });
    }

    // Search button
    if (searchButton) {
        searchButton.addEventListener("click", searchProducts);
    }

    // Search while typing
    if (searchInput) {
        searchInput.addEventListener("keyup", searchProducts);
    }


    // ==============================
    // CATEGORY FILTER
    // ==============================

    categoryCards.forEach(function (category) {

        category.addEventListener("click", function () {

            const selectedCategory =
                category.querySelector("h3").innerText.toLowerCase();

            productCards.forEach(function (product) {

                const productCategory =
                    product.querySelector(".product-category");

                if (productCategory) {

                    const categoryText =
                        productCategory.innerText.toLowerCase();

                    if (categoryText.includes(selectedCategory)) {
                        product.style.display = "block";
                    } else {
                        product.style.display = "none";
                    }

                }

            });

            // Scroll down to products
            const productSection =
                document.querySelector(".marketplace-section");

            if (productSection) {
                productSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});