import {spawn as _spawn} from 'node:child_process';

export async function spawn(...args){
    return new Promise((resolve, reject)=>{
        const p = _spawn(...args)
        p.on('exit', code => {
            if(code === 0){
                resolve()
            } else {
                console.log(args)
                reject(new Error('Command Failed'))
            }
        })
    })

}
