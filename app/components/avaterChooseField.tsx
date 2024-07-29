import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

const avatarsUrl = [
    "https://s3-alpha-sig.figma.com/img/40fe/e60b/a7bf73eaffd830005b1726220e8b6ecc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXOUcUQZoQuZQRMhcTorv-CZCTY8Zw5VcG0MDJxWHA7XS-obzQor87eVEqSGCj9bCiu-PlO5MKeK7QR31v9x4Xo6Sz2EYQQ0WH0Y4AsDsv21JsR~15cZUCjQ~CtSZU5LShpwxdFT~IEqg7NmBU94OsgUIX5uaKV4OkQb5B-Q67C32e6QdRqDD6u3H~yRkXVkRsimn6SCGOjJRqrhynqiG4hrs5zZ6JqqPylJOMxINLa01iuRPcqDSwaVGROULdcqc8ivDO1YCy5lle~Gmp-wYrTAOgth4fAraWdV8BDu~vFDHAC6q5emAWWD~6R7KssoTCoADsfdZnShydZhFW3ieg",
    "https://s3-alpha-sig.figma.com/img/6fde/2f9b/3e8f63ac9f0c473469d0a75c2fc82c0d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HzWGU9aRelUduCF-PYwzvirZ4mztSeCcg4NQ1VuAr1tbQnPkVh6i4JChlQtPiKS9MfRxgvCo19x3C3GRhEZwDPH5FEQMx0zp1vNLdnU6brKw0I0mMFrVixVkNDM7~xoO18kb8uA2GC7oNwaImRh8~LgIpqQhX5Lou-jB25FtIQW9PE9NTZmbfX8zEyD-SX-CfCwFMylkq3GNLvx9SZvkGT7wkPE~Wp-m-TNjYTxyWgKkNBJp0j5xIew63j4KXytcSBevaoW12onkZ2tdlVQmW7uYEHxvOeRNJpnwHzhc8I9GA2N766eLawPi7iqlncGAkJEvkhXlwsIrnLZ7iX5Huw",
    "https://s3-alpha-sig.figma.com/img/06e9/859f/c5fb1108ca6c7b08e9cebab081d31feb?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAIBuuoda6J9Osc2CfYc1n-lIjdfONy4EJT4tUJW0EClH5EzJ2dc7dgx4W2MwZsbKSViwV0Qv7zcmxPh2FWpDTNfCt8G5eRjuwDrW2vup7Rc3~x1reGTY9sXP2caKHut52GZfH3K6Yml6VCdXSKhd-MvR5A4XE218wRkcYDsl7p4tzi7KDKRIoWiLoXxSl2M724JSUqqci352REsRLNMTF9KjzOg~swLj3N5dzm4kzPYh1Ra4Wyzb6uf7h2Voo3OHKG1xcvVrDDjFR32~YYK6bFG88fthecSnu0VcHWmOxcgFkrVOsEqZQBfodQZyd9~JTOSRTeSbXE6VTkyqV6oFQ",
    "https://s3-alpha-sig.figma.com/img/99b5/e0b9/6284094d7195da5049236c6f08fe321a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3x46aQrygdt0-eY09vNgbl-tNqv4U461XbzB3QBYl3X-5ZqAJpkh-6SRcobFDg2YmUKMz9PfjK-IbCwk9xjFb1vvSR~jsikm2r3MBoEdjz9ioIgxWdOvOpDl70p1~Y~B2eiG~XwkFKe3cvK5bBSgjnWd9g~6F2Z~kRBe38h~rGfz3bgtcmy2Klnh520LIzF~sAJmhdsjpNj2L266lp6Nyq28DjqTf052IRC0UxM7Y8t55D29IxYpfa6CHgTPVC~Wb6uhnaCREKIO67W4kFHXpyXG1xDSpL68~rFecV2BpFkbISIPywG7UmEaNiB8kmrtqAleqfbKKDE9t6NRokPKg",
    "https://s3-alpha-sig.figma.com/img/782d/085f/fc441fbc4175c9497c2403fb6a78fe43?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV4p6aahy0Z6q86pWmIa-d6tMmZoWjC-dlNQBNNrxt6lFOQzz2vE8MPLYDsFVAfpeUwQHFXCFUJmFciKv4LjvFHCs4tw2qKKnVBwLfXW548LYYeRdKh3NvIRtx7Gh3RFu0myr0EpgSXyLMJOGEbqRDkWu4Lpe-zaqFaG7NYBQVcQjZayhygKRl715LrZEBjnPvGkG6qQLGq~QnCWCwoc5AcBgbXrVQCARBYYZqvK439boo4gtvWDHWuF~ImjzF4~hfsj8O96w8fNeCN6MFxiNAqXnHnueFaeYzjt~LlAnCh6pB6pW7uRKq5IqcJ2q50CitOF3tEksgIz5xs1jHQScA",
    "https://s3-alpha-sig.figma.com/img/c0c5/ad23/ffd0eba719584f06e9102ab36fd5a47b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKTAuNN2N4C9uXdAPBbNdNmgGP6Z6rWkBW~uBfNsSvzqUtx5kV6fxsbBxxxLca224QMUtrvxPVhU9snYO3BnfWUB3eNxxg2NpCXUPjYTcR5eFbgPYHAvIDZeftUz6NjaDAXLjQhXlrw72sesgV4BsAnong7Ao~PHD8UXqhHW3ydAdiC13~OOQ18T7vnatG1NKlES-Wh7fAfTWuwjrEZJHZsDdAjRsUSI641tolVlWChlDaBgFmljtZWT5c3ApjTmNtyePYhPXl5RO2rfAx6CZNAilKk5w8Qo3tW6VgbzRwCTlEq06CB6FNaAH-cADm9vckma72NPh8uLi-UNiy3Mhg",
   "https://s3-alpha-sig.figma.com/img/4bca/ce83/5c2ea7c3384dc601196e9cf1ca6dc1f6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVk8VBAdpDynQmlGxPd9FRJg4t6FjIjoWg7Muw1GloeZmLpN3XWVYOPTU8orOt5i9t09Lx-4XUhDVNIyPCJN91QV6Ppn2KAg6LRB-xMYOHobeuKoI1gTOObAX4bGPrIxrO1~qn6rC32WCbc2K-RsnSceqP2ICO-uw6G3DWhe38Kr0FER57jhpp3eA7NoFEOHZ703tFSsU8Q2P6~jbT1CLZhjF6SJGVIP6uFD9HQkn~D9CstVMqjc1yPF36VQ0024rfdHfedkaihfU-ytD5hfMvLB9~Mz40abYd70JA1S3tk~uDAbkflpHf~0JooFJD1mTLdKQd8UiBwI6kJxBL~cdA",
    "https://s3-alpha-sig.figma.com/img/8434/dada/1a5f31b23f457c03cae2cff467a58cd8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRkVsvwtZYlfxMTru5swMLv5GLOpOrWsXXW2sQUqcrWW0wWP1fC4aKyKok1ifU-A99yQlthDPiKr-1g95qFH0uRfyNBg0eo4KhGbHm-etwyia2gkm3L9OxB9olLpRpiQTKbDQ0QBAOovLXjLTPfkCYHpmZUbsjHU3QYR4xrx2fcEZcCJ7C8273ts1Ymhmx4~mLyM-dsS2vJwvELKnkNCzsEabFdAc4sY7-RwXoN1JQzsJIk9ItmM2WykIP683WESjoK4XNBui~3FPac2yUWtSeM~XYefHnGHs57R0y5I5MkAQCpLZ6uPpC0RZf6MolnzrPr0CFdRF6YTDnXlja63pA",
    "https://s3-alpha-sig.figma.com/img/5683/f57f/e5ee8ff610d3245c08b2c6d28dace5ea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSXxc7lh7UXIbfSd2XuGUCvUvpB29QXv5fniJcmgQ5WOYx05Ku4SweTXu80kPeC8kHCiKEtuRj5g37thLwjsI3O18gHCRE3Xn4j3xAo8Q0nYODQDXewzyN4AfaQb1BGBB2lmGeVREM2aXfY607UGlK3RNZoEWl7R2sSegc5BFabfvxS3vkOau1j1NFQhFEmB6jEESUQewNRX-u-1Wita0OUIwndxGvhlWqyYxE~crHFxY9JJhV5aD696vflRhzVhPH4iem0NUJLQB8A-3D9Q65WSb8~1tMAdda1q9a4-jcD6WP4~qCbJTKgFMnj7RmOuF-uWgpEkyHWr6F6LLD144w",
    "https://s3-alpha-sig.figma.com/img/4bca/ce83/5c2ea7c3384dc601196e9cf1ca6dc1f6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVk8VBAdpDynQmlGxPd9FRJg4t6FjIjoWg7Muw1GloeZmLpN3XWVYOPTU8orOt5i9t09Lx-4XUhDVNIyPCJN91QV6Ppn2KAg6LRB-xMYOHobeuKoI1gTOObAX4bGPrIxrO1~qn6rC32WCbc2K-RsnSceqP2ICO-uw6G3DWhe38Kr0FER57jhpp3eA7NoFEOHZ703tFSsU8Q2P6~jbT1CLZhjF6SJGVIP6uFD9HQkn~D9CstVMqjc1yPF36VQ0024rfdHfedkaihfU-ytD5hfMvLB9~Mz40abYd70JA1S3tk~uDAbkflpHf~0JooFJD1mTLdKQd8UiBwI6kJxBL~cdA",
    "https://s3-alpha-sig.figma.com/img/40fe/e60b/a7bf73eaffd830005b1726220e8b6ecc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXOUcUQZoQuZQRMhcTorv-CZCTY8Zw5VcG0MDJxWHA7XS-obzQor87eVEqSGCj9bCiu-PlO5MKeK7QR31v9x4Xo6Sz2EYQQ0WH0Y4AsDsv21JsR~15cZUCjQ~CtSZU5LShpwxdFT~IEqg7NmBU94OsgUIX5uaKV4OkQb5B-Q67C32e6QdRqDD6u3H~yRkXVkRsimn6SCGOjJRqrhynqiG4hrs5zZ6JqqPylJOMxINLa01iuRPcqDSwaVGROULdcqc8ivDO1YCy5lle~Gmp-wYrTAOgth4fAraWdV8BDu~vFDHAC6q5emAWWD~6R7KssoTCoADsfdZnShydZhFW3ieg",
    "https://s3-alpha-sig.figma.com/img/6fde/2f9b/3e8f63ac9f0c473469d0a75c2fc82c0d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HzWGU9aRelUduCF-PYwzvirZ4mztSeCcg4NQ1VuAr1tbQnPkVh6i4JChlQtPiKS9MfRxgvCo19x3C3GRhEZwDPH5FEQMx0zp1vNLdnU6brKw0I0mMFrVixVkNDM7~xoO18kb8uA2GC7oNwaImRh8~LgIpqQhX5Lou-jB25FtIQW9PE9NTZmbfX8zEyD-SX-CfCwFMylkq3GNLvx9SZvkGT7wkPE~Wp-m-TNjYTxyWgKkNBJp0j5xIew63j4KXytcSBevaoW12onkZ2tdlVQmW7uYEHxvOeRNJpnwHzhc8I9GA2N766eLawPi7iqlncGAkJEvkhXlwsIrnLZ7iX5Huw",
]

interface AvatarChooseFieldProps {
    setAvatarUrl: (avatar: string) => void
}

export function AvatarChooseField({ setAvatarUrl }: AvatarChooseFieldProps) {

    const handleAvatarClick = (avatar: string) => {
        setAvatarUrl(avatar)
    }

    return (
        <div className='grid place-items-center grid-cols-4 gap-4 m-auto w-[512px] h-[396px] p-8 rounded-[8px] border-1/2 bg-[#ACE8FF]'>
            {
                avatarsUrl.map((avatar, index) => (
                    <Avatar
                        key={index} 
                        className='h-[100px] w-[100px] cursor-pointer transition-all hover:scale-110'
                        onClick={() => handleAvatarClick(avatar)}
                    >
                        <AvatarImage src={avatar} alt={`avatar-${index}`} />
                        <AvatarFallback>
                            <Skeleton className='w-full h-full' />
                        </AvatarFallback>
                    </Avatar>
                ))
            }
        </div>
    )
}
