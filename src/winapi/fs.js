/*
    FileSystem API for Windows XP Simulator
    License: MIT
*/
import OSMetadata from '../info.js'
import Window from './window.js'
import { render } from 'react'
class Drive {
    constructor(letter) {
        if(!window.Disks) {
            window.Disks = []
        }
        
        this.meta = {
            letter,
            fs: null
        }

        const openDriveRequest = window.indexedDB.open(`Drive${letter.toUpperCase()}`, OSMetadata.build)
        
        openDriveRequest.onsuccess = this.onDriveInitSuccessfull
        openDriveRequest.onerror = this.onDriveError
        openDriveRequest.onupgradeneeded = this.onDriveFileSystemUpdate
    }

    onDriveInitSuccessfull(fs) {
        this.meta.fs = fs.target.result
        window.Disks[this.letter] = this
    }

    onDriveError(e) {
        return (
            <Window>
                <div>
                    Can't mount drive, Letter of drive: {this.meta.letter}
                </div>
            </Window>
        )
    }

    onDriveFileSystemUpdate() {

    }
}

export function CreateAndMountDrive() {
    const availableAllLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let usedLetters = []
    JSON.parse(localStorage.getItem('Drives')).forEach(a => usedLetters.push(a));
    const availableLetters = availableAllLetters.filter(a => usedLetters.indexOf(a) == -1)
    if(!availableLetters.length) {
        console.error('Dont have available letters')

        return (
            <Window>
                <div>
                    Can't mount drive, Letter of drive: {this.meta.letter}
                </div>
            </Window>
        )
    }
    if(!availableLetters.length) {
        console.error('Dont have available letters')
    }
}
export default Drive;