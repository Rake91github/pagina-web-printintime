function toggleFavourite() {
    const starIcon = document.getElementById('favouriteIcon');

    if (starIcon.classList.contains('bi-heart')) {

        starIcon.classList.remove('bi-heart');
        starIcon.classList.add('bi-heart-fill');
    }   else {
        starIcon.classList.remove('bi-heart-fill');
        starIcon.classList.add('bi-heart');
    }
}
