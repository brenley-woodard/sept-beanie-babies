export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const animal = document.createElement('span');
    animal.textContent = beanie.animal;

    const astroSign = document.createElement('span');
    astroSign.textContent = beanie.astroSign;

    attributes.append(animal, astroSign);

    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${beanie.releaseYear}`;

    content.append(h2, attributes, released);

    li.append(img, content);

    return li;
}

export function renderAstroOption(astro) {
    const option = document.createElement('option');
    option.value = astro.name;
    option.textContent = astro.name;
    return option;
}
