export const EXCLUDED_VERSIONS = [
    // Swagger not commited to repo yet
    'v2.0.3-stable',
    'v2.0.4-stable',
    'v2.0.5-stable',
    'v2.0.6-stable',
    // No valid release
    'v3.7.1-stable',
    'v3.12.3-stable',
    'v3.16.1-stable',
]

export function sortVersions(a, b) {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    }
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    }
    return a[2] - b[2];
}
/**
 * Only stable tags that start with v
 *
 * @param {string} tag
 * @return {boolean}
 */
export function isStable(tag){
    return tag.includes('stable') && tag[0] === 'v' && !tag.includes('backport')
}

/**
 * Check if the tag is a major version
 *
 * @param {string} tag
 * @param {string} version
 * @return {boolean}
 */
export function isMajorVersion(tag, version){
    return getVersionFromTag(tag).split('.')[0] === version
}

/**
 * If the tag is a valid release that can be automated
 *
 * @param tag
 * @return {boolean}
 */
export function isValid(tag){
    return isStable(tag) && !EXCLUDED_VERSIONS.includes(tag) && (isMajorVersion(tag, '2') || isMajorVersion(tag, '3'))
}

/**
 * Convert a reference to a tuple
 * @param ref - refs/tags/v2.0.1-stable
 * @return {number[]}
 */
export function toTuple(ref){
    return getVersionFromTag(ref.replace('refs/tags/', '')).split('.').map(i=>parseInt(i))
}
/**
 *
 * @param {string} tag - v2.0.1-stable
 * @return {string}
 */
export function getVersionFromTag(tag){
    return tag.replace('v', '').split('-')[0]
}


export function getNextVersion(currentVersion, stableReleases){
    const [major, minor, patch] = currentVersion.split('.').map(i=>parseInt(i))
    const results = stableReleases.filter(([m, n, p])=>{
        const isMajor = m > major
        const isMinor = m === major && n > minor
        const isPatch = m === major && n === minor && p > patch
        return isMajor || isMinor || isPatch
    })
    return typeof results[0] === 'undefined' ? [major, minor, patch]: results[0]
}
