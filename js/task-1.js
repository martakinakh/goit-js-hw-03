// Задача 1. Генератор slug

function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

