const cardDatas = [
    {
        name: '아주대학교 홈페이지',
        id: 'ajouuniv',
        tag: ['AjouUniv', '2018', 'june', 'hover', 'asfdfsad'],
        explain: '1111111',
        image: 'images/ajou.univ.homepage.png',
        fileName: 'ajou.univ.html'
    },
    {
        name: 'instagram',
        id: 'instagram',
        tag: ['instagram', '2018', 'june', 'input', 'position', 'fixed', 'scroll', 'icon', 'fontawesome', 'hover'],
        explain: '2222222',
        image: 'images/instagram.png',
        fileName: 'instagram.html'

    },
    {
        name: 'firebase',
        id: 'firebase',
        tag: ['firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase', 'firebase'],
        explain: '333333',
        image: 'images/firebase.png',
        fileName: 'firebase.html'

    },
    {
        name: 'kakaotalk',
        id: 'kakaotalk',
        tag: ['kakaotalk'],
        explain: '333333',
        image: 'images/kakaotalk_login.png',
        fileName: 'kakaotalk.login.html'
    },
    {
        name: 'calculator',
        id: 'calculator',
        tag: ['calculator'],
        explain: '4444444',
        image: 'images/calculator.png',
        fileName: 'calculator.html'
    },
    {
        name: 'json filter',
        id: 'jsonfilter',
        tag: ['json filter'],
        explain: '4444444',
        image: 'images/jsonfilter.png',
        fileName: 'jsonfilter.html'
    },
    {
        name: 'text finder',
        id: 'textfinder',
        tag: ['text finder'],
        explain: '4444444',
        image: 'images/textfinder.png',
        fileName: 'textfinder.html'
    },
    {
        name: 'fractal',
        id: 'fractal',
        tag: ['fractal'],
        explain: '4444444',
        image: 'images/fractal.png',
        fileName: 'fractal.html'
    },
];

const selectedCardDatas = [];

const $input = $('input');
const $cardZone = $('.card-zone');


const appendTemplateData = () => {
    for (let i = 0; i < cardDatas.length; i++) {
        $cardZone.append(`
        <div class="card" id="${cardDatas[i].id}" fileName = "${cardDatas[i].fileName}">
          <div class="card-content">
            <div class="card-image" style="background-image: url(${cardDatas[i].image})"></div>
            <div class="card-text-zone">
              <div class="card-name">${cardDatas[i].name}</div>
              <div class="card-tag-zone"></div>
              <div class="card-explain">${cardDatas[i].explain}</div>
            </div>
          </div>
        </div>`
        );
    }

};
appendTemplateData();


const appendTag = () => {
    for (let i = 0; i < cardDatas.length; i++) {
        const $selectedCard = $(`#${cardDatas[i].id}`);
        const $tagZone = $selectedCard.find('.card-tag-zone');

        for (let j = 0; j < cardDatas[i].tag.length; j++) {
            $tagZone.append(`<div class="card-tag">#${cardDatas[i].tag[j]}</div>`);
        }
    }


};
appendTag();


// count
const setTotalCount = () => {
    $('#totalNumber').text(cardDatas.length);
};
setTotalCount();


const setSelectedCount = function () {
    $('#selectedNumber').text($('.card-zone').find('.card').length);
};

setSelectedCount();


$input.on('keyup', function () {
    $cardZone.empty();
    if ($input.val() === '') {
        appendTemplateData();
    }
    else {
        const selectText = new RegExp(`(\\w*${$input.val()}\\w*)`, 'g');
        for (let i = 0; i < cardDatas.length; i++) {
            for (let j = 0; j < cardDatas[i].tag.length; j++) {
                if (selectText.exec(cardDatas[i].tag[j])) {
                    $cardZone.append(`
                    <div class="card" id="${cardDatas[i].id}" fileName = "${cardDatas[i].fileName}">
                      <div class="card-content">
                        <div class="card-image" style="background-image: url(${cardDatas[i].image})"></div>
                        <div class="card-text-zone">
                          <div class="card-name">${cardDatas[i].name}</div>
                          <div class="card-tag-zone"></div>
                          <div class="card-explain">${cardDatas[i].explain}</div>
                        </div>
                      </div>
                    </div>`);
                    break;
                }
            }
        }
    }
    appendTag();
    setSelectedCount();

});


const $card = $('.card-content');

$card.on('click', function () {
    const $cardContent = $(this);
    window.location = `/junyup0319.github.io/views/${$cardContent.parent().attr('fileName')}`;
});