import React, { useState, useEffect } from 'react'

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP'
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // タイマーのセットをするための副作用
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // クリーンアップ関数という
    // 次のuseEffectが実行される直前もしくはアンマウント時に実行される
    return () => {
      clearInterval(timer)
    }
  }, []) //第二引数の依存配列を空にすると毎描画ごとに中身をチェックして、前回の描画時と異なる場合のみ第一引数の関数が実行される

  // local storageから値を読み込むための副作用
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, []) //依存配列を空にすることで、初期描画時のみ実行

  // localeが変化したときに、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
    // 依存配列にlocaleを私、localeが変化するたびに実行するようにする
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">jp-JP</option>
        </select>
      </p>
    </div>
  )
}
