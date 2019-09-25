import {Subject} from 'rxjs'

const subject = new Subject()

export const ListenService = {
    switchLang: (lang) => subject.next({lang: lang}),
    onChangeLang: () => subject.asObservable()
}