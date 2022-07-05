let colorCard = function() {

    const colors = ['#e5def0', '#d6edd9', '#f6f0d8', '#e6f2fe'],
        colorCard = document.getElementsByClassName('assetcard');

    for (let i = 0; i < colorCard.length; i++) {
        colorCard[i].style.cssText =
            ` background-color: ${colors[i]}; `
    }
}

export default colorCard;