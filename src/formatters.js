export const formatTitle = (title) => {
    return title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`;
};

export const formatIngredient = (ingredient) => {
    return ingredient.text;
};

export const formatSource = (source) => {
    return source;
}

export const formatImage = (image) => {
    return image;
}

export const formatUrl = (url) => {
    return url;
}