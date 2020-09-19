import React from 'react';

const photos = {
    sprout: 'url("https://www.aerogarden.com/media/catalog/product/cache/64ebc7bb381071a8d1167cf8ef242b3b/s/p/sprout_blk_rf_gh_isolated_800.jpg")',
    harvest: 'url("https://www.aerogarden.com/media/catalog/product/cache/64ebc7bb381071a8d1167cf8ef242b3b/h/a/harvest_blk_gh.jpg")',
    bounty: 'url("https://www.aerogarden.com/media/catalog/product/cache/64ebc7bb381071a8d1167cf8ef242b3b/b/o/bounty_ff_blk_gh_02_800.jpg")',
}

const links = {
    sprout: 'https://www.aerogarden.com/sprout.html',
    harvest: 'https://www.aerogarden.com/harvest-base.html',
    bounty: 'https://www.aerogarden.com/new-aerogarden-bounty.html',
}

function format(name) {
    let result = (name.charAt(0).toUpperCase() + name.substring(1))
    return result;
}

const Compatible = (props) => (
    // I WOULD HAVE PROBABLY DONE THIS AS DIVS RATHER THAN A LIST
    // BUT THE DIRECTIONS SAID TO HAVE IT AS AN UL
    <ul className="compatible-list">
        {props.compatible.map((garden) =>
            <li className="compatible-bg" style={{backgroundImage: photos[garden]}}>
                <a 
                    href={links[garden]}
                    target="_blank"
                    key={garden} 
                    className="compatible"
                >
                    {format(garden)}
                </a>
            </li>
        )}
    </ul>
);

export default Compatible;