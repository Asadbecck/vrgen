import React from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Transale } from '../../constants/index';

export default function SelectTransla() {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18next.changeLanguage(language.target.value)
  }
  return (
    <select onChange={changeLanguage} className='text-white bg-slate-900 font-poppins rounded-[10px] font-normal cursor-pointer text-[16px] px-[50px]' name="" id="1">
      {Transale.map((opt, i) => {
        return < React.Fragment key={i}>
          <option className='text-white bg-slate-900 ivide-slate-900' value={opt.value}>{t(opt.text)}</option>
        </React.Fragment>
      })}
    </select>
  )
}