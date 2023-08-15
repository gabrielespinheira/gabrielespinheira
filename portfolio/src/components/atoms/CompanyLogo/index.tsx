/* eslint-disable @next/next/no-img-element */

type ICompanyLogos =
  | string
  | 'trii'
  | 'shosp'
  | 'setta'
  | 'xp'
  | 'art2act'
  | 'lovelystay'
  | 'mollie'

const CompanyLogo = ({ company, title }: { company: ICompanyLogos; title: string }) => {
  const source = `/companies/${company}.svg`

  return <img src={source} alt={title} title={title} />
}

export default CompanyLogo
