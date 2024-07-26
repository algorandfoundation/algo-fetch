
/**
 * Get the release body and url
 * @param {string} repo
 * @param {string} tag
 * @param {string} [token]
 * @return {Promise<{body: *, url: *}>}
 */
export async function getRelease(repo, tag, token) {
    let headers = {
        'Accept': 'application/vnd.github.v3+json',
    };
    if (typeof token === 'string') {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return await fetch(`https://api.github.com/repos/${repo}/releases/tags/${tag}`, {
        method: 'GET',
        headers,
    }).then(r => {
        if (r.status === 404) {
            return null;
        }
        if(r.status !== 200){
            console.error(r);
            throw new Error(r.statusText);
        }
        return r.json().then(r => ({
            body: r['body'],
            url: r['html_url'],
        }));
    });
}



export async function getTags(repo, token) {
    let headers = {
        'Accept': 'application/vnd.github.v3+json',
    };
    if (typeof token === 'string') {
        headers['Authorization'] = `Bearer ${token}`;
    }

    return await fetch(`https://api.github.com/repos/${repo}/git/refs/tags`, {
        method: 'GET',
        headers,
    }).then(r => {
        if (r.status !== 200) {
            console.error(r);
            throw new Error(r.statusText);
        }
        return r.json();
    });
}
