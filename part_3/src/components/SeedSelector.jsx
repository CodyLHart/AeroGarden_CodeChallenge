import React from 'react';

const photos = {
    gourmet_herbs: 'url("https://www.betterhealth.vic.gov.au/-/media/bhc/images/healthy-living/herbs_1050x600.jpg?la=en&hash=8B7CF656405714AF29F33DD7611ECC33D1A0CF4E")',
    cherry_tomatoes: 'url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cherry-tomatoes-growing-in-a-garden-royalty-free-image-543586990-1531260958.jpg")',
    salad_greens: 'url("https://www.almanac.com/sites/default/files/image_nodes/lettuce-varieties.jpg")',
}

function format(name) {
    let arr = name.split('_');
    let resultArr = []
    arr.forEach(el => {
        resultArr.push(el.charAt(0).toUpperCase() + el.substring(1))
    })
    return resultArr.join(' ');
}

const SeedSelector = (props) => (
    <div className="seed-selector">
        {Object.keys(props.data.seed_kits).map((kit) =>
            <div className="seedbox-bg" style={{backgroundImage: photos[kit]}}>
                <button 
                    key={kit} 
                    className = {props.selected === kit ? 'seedbox selected' : 'seedbox'}
                    onClick={() => props.handleSelect(kit)}
                    >
                    {format(kit)}
                </button>
            </div>
        )}
    </div>
);

export default SeedSelector;