import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const avatarsUrl = [
    "https://s3-alpha-sig.figma.com/img/40fe/e60b/a7bf73eaffd830005b1726220e8b6ecc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXOUcUQZoQuZQRMhcTorv-CZCTY8Zw5VcG0MDJxWHA7XS-obzQor87eVEqSGCj9bCiu-PlO5MKeK7QR31v9x4Xo6Sz2EYQQ0WH0Y4AsDsv21JsR~15cZUCjQ~CtSZU5LShpwxdFT~IEqg7NmBU94OsgUIX5uaKV4OkQb5B-Q67C32e6QdRqDD6u3H~yRkXVkRsimn6SCGOjJRqrhynqiG4hrs5zZ6JqqPylJOMxINLa01iuRPcqDSwaVGROULdcqc8ivDO1YCy5lle~Gmp-wYrTAOgth4fAraWdV8BDu~vFDHAC6q5emAWWD~6R7KssoTCoADsfdZnShydZhFW3ieg",
    "https://s3-alpha-sig.figma.com/img/06e9/859f/c5fb1108ca6c7b08e9cebab081d31feb?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kAIBuuoda6J9Osc2CfYc1n-lIjdfONy4EJT4tUJW0EClH5EzJ2dc7dgx4W2MwZsbKSViwV0Qv7zcmxPh2FWpDTNfCt8G5eRjuwDrW2vup7Rc3~x1reGTY9sXP2caKHut52GZfH3K6Yml6VCdXSKhd-MvR5A4XE218wRkcYDsl7p4tzi7KDKRIoWiLoXxSl2M724JSUqqci352REsRLNMTF9KjzOg~swLj3N5dzm4kzPYh1Ra4Wyzb6uf7h2Voo3OHKG1xcvVrDDjFR32~YYK6bFG88fthecSnu0VcHWmOxcgFkrVOsEqZQBfodQZyd9~JTOSRTeSbXE6VTkyqV6oFQ",
    "https://s3-alpha-sig.figma.com/img/99b5/e0b9/6284094d7195da5049236c6f08fe321a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E3x46aQrygdt0-eY09vNgbl-tNqv4U461XbzB3QBYl3X-5ZqAJpkh-6SRcobFDg2YmUKMz9PfjK-IbCwk9xjFb1vvSR~jsikm2r3MBoEdjz9ioIgxWdOvOpDl70p1~Y~B2eiG~XwkFKe3cvK5bBSgjnWd9g~6F2Z~kRBe38h~rGfz3bgtcmy2Klnh520LIzF~sAJmhdsjpNj2L266lp6Nyq28DjqTf052IRC0UxM7Y8t55D29IxYpfa6CHgTPVC~Wb6uhnaCREKIO67W4kFHXpyXG1xDSpL68~rFecV2BpFkbISIPywG7UmEaNiB8kmrtqAleqfbKKDE9t6NRokPKg",
    "https://s3-alpha-sig.figma.com/img/782d/085f/fc441fbc4175c9497c2403fb6a78fe43?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV4p6aahy0Z6q86pWmIa-d6tMmZoWjC-dlNQBNNrxt6lFOQzz2vE8MPLYDsFVAfpeUwQHFXCFUJmFciKv4LjvFHCs4tw2qKKnVBwLfXW548LYYeRdKh3NvIRtx7Gh3RFu0myr0EpgSXyLMJOGEbqRDkWu4Lpe-zaqFaG7NYBQVcQjZayhygKRl715LrZEBjnPvGkG6qQLGq~QnCWCwoc5AcBgbXrVQCARBYYZqvK439boo4gtvWDHWuF~ImjzF4~hfsj8O96w8fNeCN6MFxiNAqXnHnueFaeYzjt~LlAnCh6pB6pW7uRKq5IqcJ2q50CitOF3tEksgIz5xs1jHQScA",
    "https://s3-alpha-sig.figma.com/img/c0c5/ad23/ffd0eba719584f06e9102ab36fd5a47b?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKTAuNN2N4C9uXdAPBbNdNmgGP6Z6rWkBW~uBfNsSvzqUtx5kV6fxsbBxxxLca224QMUtrvxPVhU9snYO3BnfWUB3eNxxg2NpCXUPjYTcR5eFbgPYHAvIDZeftUz6NjaDAXLjQhXlrw72sesgV4BsAnong7Ao~PHD8UXqhHW3ydAdiC13~OOQ18T7vnatG1NKlES-Wh7fAfTWuwjrEZJHZsDdAjRsUSI641tolVlWChlDaBgFmljtZWT5c3ApjTmNtyePYhPXl5RO2rfAx6CZNAilKk5w8Qo3tW6VgbzRwCTlEq06CB6FNaAH-cADm9vckma72NPh8uLi-UNiy3Mhg",
    "https://s3-alpha-sig.figma.com/img/8434/dada/1a5f31b23f457c03cae2cff467a58cd8?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRkVsvwtZYlfxMTru5swMLv5GLOpOrWsXXW2sQUqcrWW0wWP1fC4aKyKok1ifU-A99yQlthDPiKr-1g95qFH0uRfyNBg0eo4KhGbHm-etwyia2gkm3L9OxB9olLpRpiQTKbDQ0QBAOovLXjLTPfkCYHpmZUbsjHU3QYR4xrx2fcEZcCJ7C8273ts1Ymhmx4~mLyM-dsS2vJwvELKnkNCzsEabFdAc4sY7-RwXoN1JQzsJIk9ItmM2WykIP683WESjoK4XNBui~3FPac2yUWtSeM~XYefHnGHs57R0y5I5MkAQCpLZ6uPpC0RZf6MolnzrPr0CFdRF6YTDnXlja63pA",
    "https://s3-alpha-sig.figma.com/img/5683/f57f/e5ee8ff610d3245c08b2c6d28dace5ea?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSXxc7lh7UXIbfSd2XuGUCvUvpB29QXv5fniJcmgQ5WOYx05Ku4SweTXu80kPeC8kHCiKEtuRj5g37thLwjsI3O18gHCRE3Xn4j3xAo8Q0nYODQDXewzyN4AfaQb1BGBB2lmGeVREM2aXfY607UGlK3RNZoEWl7R2sSegc5BFabfvxS3vkOau1j1NFQhFEmB6jEESUQewNRX-u-1Wita0OUIwndxGvhlWqyYxE~crHFxY9JJhV5aD696vflRhzVhPH4iem0NUJLQB8A-3D9Q65WSb8~1tMAdda1q9a4-jcD6WP4~qCbJTKgFMnj7RmOuF-uWgpEkyHWr6F6LLD144w",
    "https://s3-alpha-sig.figma.com/img/4bca/ce83/5c2ea7c3384dc601196e9cf1ca6dc1f6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oVk8VBAdpDynQmlGxPd9FRJg4t6FjIjoWg7Muw1GloeZmLpN3XWVYOPTU8orOt5i9t09Lx-4XUhDVNIyPCJN91QV6Ppn2KAg6LRB-xMYOHobeuKoI1gTOObAX4bGPrIxrO1~qn6rC32WCbc2K-RsnSceqP2ICO-uw6G3DWhe38Kr0FER57jhpp3eA7NoFEOHZ703tFSsU8Q2P6~jbT1CLZhjF6SJGVIP6uFD9HQkn~D9CstVMqjc1yPF36VQ0024rfdHfedkaihfU-ytD5hfMvLB9~Mz40abYd70JA1S3tk~uDAbkflpHf~0JooFJD1mTLdKQd8UiBwI6kJxBL~cdA",
    "https://s3-alpha-sig.figma.com/img/40fe/e60b/a7bf73eaffd830005b1726220e8b6ecc?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kXOUcUQZoQuZQRMhcTorv-CZCTY8Zw5VcG0MDJxWHA7XS-obzQor87eVEqSGCj9bCiu-PlO5MKeK7QR31v9x4Xo6Sz2EYQQ0WH0Y4AsDsv21JsR~15cZUCjQ~CtSZU5LShpwxdFT~IEqg7NmBU94OsgUIX5uaKV4OkQb5B-Q67C32e6QdRqDD6u3H~yRkXVkRsimn6SCGOjJRqrhynqiG4hrs5zZ6JqqPylJOMxINLa01iuRPcqDSwaVGROULdcqc8ivDO1YCy5lle~Gmp-wYrTAOgth4fAraWdV8BDu~vFDHAC6q5emAWWD~6R7KssoTCoADsfdZnShydZhFW3ieg",
    "https://s3-alpha-sig.figma.com/img/6fde/2f9b/3e8f63ac9f0c473469d0a75c2fc82c0d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HzWGU9aRelUduCF-PYwzvirZ4mztSeCcg4NQ1VuAr1tbQnPkVh6i4JChlQtPiKS9MfRxgvCo19x3C3GRhEZwDPH5FEQMx0zp1vNLdnU6brKw0I0mMFrVixVkNDM7~xoO18kb8uA2GC7oNwaImRh8~LgIpqQhX5Lou-jB25FtIQW9PE9NTZmbfX8zEyD-SX-CfCwFMylkq3GNLvx9SZvkGT7wkPE~Wp-m-TNjYTxyWgKkNBJp0j5xIew63j4KXytcSBevaoW12onkZ2tdlVQmW7uYEHxvOeRNJpnwHzhc8I9GA2N766eLawPi7iqlncGAkJEvkhXlwsIrnLZ7iX5Huw",
    "https://s3-alpha-sig.figma.com/img/ece3/a67b/ddfa2c81d01a765765c4006365aa136d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KVIEt82OW4KZlvFzeMIP49neEC7sG4YUnIbxdtgtyDFkDKI7BqOY4TytmNq8WnajgOb2ScvgAg1m1s-8Nx9ME9WaCTGyLQT3~4~Dkqb-A9~EtqcDO1njxk-HBfp5clBhpxxbeXMrjzaG8TqXdGUUynteoyOmgqKLTVy~k7cTJldegabYZiqcZg615fO5KMFUf88rKAYMyckwAdUoPu5eUdvt2nBYQPz0jozS8NcLHnk8yMDimvWwvZ51RShQgKMoaLH7pkrbF-7i39R8aUgN9CyRQcNZEgBYbI3FNHQTihHPR9ZBle~YfhIKZ7Ss6T3IrQp3GoLlLfstLBPRMv3DEw",
    "https://s3-alpha-sig.figma.com/img/275e/0c66/027b54bf84f373621d57f416bae63666?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lRc4~OHRiWNZokbAcYX9CCP1-OqG-d6UxKt4VkqtKvxWgBXbGfXs0uAXfnrUGUR5BgP1ZelOk7lOP6HPMTrR0~HBlk3MndQJ7n7tYTcws9JqNDOmtuEvxg53n0zDO3rTG1KOj-M0fMKBCO4RQKAOtNFevjbnF40OlHUC34CLZfmF1kV1lKESEbkOm9htGxtWh6hIW211eHjrFZkGkDMpF5u5eTZ2bK86tyfMqpyb8-cWI6gKOFOq6DlOMH4ItPGDyNOdIh-hO3UfqxWAtmwSpUCwMxwDtEPLcrj9L~djo2MyOmqRWYjmEkroYF8rqEEGd9vOm2anF92CTi3bFwBkpA",
    "https://s3-alpha-sig.figma.com/img/64a7/71bc/203c08c6cfeeca821a5300bf9e72c8a2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o92AqXtXCLoIkWDWvRPRF2vD2cDPEdENSyqUv72urf1V-pXHyW3w2gB84xZ1p867~e8d8LxuIaTu8cjflSZMH1hgFPLIrrk78N8nCSMjhxoqoj58O5q8VZvYxHo2YU18HyuAwojPu1SV4T9ypoEsezHYrCOuNMj03keOPua7CNm2k3KD~jnB-C6CBbHHg6WZCfxqszAm-R3FCrjKORoI2PGgGTxYChIfuzi0Ltux7q5-gYRuxXXzr~zw5ST388G1F6fhRueoaaRpDYdZT0HcwpR6WkKVhWvgDo6KcKmexz-zzAMh1j1zQHAp4TrwVf2gp1WvcYeesxTrr618r7MhMQ",
    "https://s3-alpha-sig.figma.com/img/4512/1c32/02f0551b37e3f2130589012568be73ce?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4k6FkbeNQpLhJ3Cvd4CkFB~XmwAegd~YVysPLIuN6rrOUDriUOzMeQi9N-sSS2t3fQacGoYxkK4WL30aMYY8xLeQISP~OWN2z2D~hnQ5R7l-EKwc5fLuyJKQ8z0KUuvxSIfHW-xf2hPdJc7ZCu0DEZ3dHq9fBGSUOlAC5jyZbscQZz0yS6nbA~3F8ep1SQBoYANjWvXvHA1~1k~prGJ4sdhMgVlAsvEl7OvGwlc9fDnBAsklF2~dHOa44r~UE6wLf7QEV-SZmSZkLqGR7WFgcgTRg25uRZhD2hH2qYe6OabgRGLbIz8F22MkHwNc7cSL7RUYEaLV9wIAx-UMvNj6w",
    "https://s3-alpha-sig.figma.com/img/88e2/f502/b265bce69798947f99f652458cc7d0ed?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jLs7ybRkm7IHJp2VkrZOQFz5H-gIiLoPgM8ptH7Xul6uVmau4OQjskj~PSEDcX~xMaF3ToY-0POxV19qoq3tClDj1h5lv4gueGxH5inRb-44EPmTWOmiopOXh4ZRlD2Cnz76KBvw53XrFN9GwwsXorms0aWT9OC7C0UhxAp1Q2Lo7XFIoZ4NY6grY3KfRggFRpeuyy74hImFpaK8KTux8YCi~7YZeJJiegsqxq6uTSjBtam43MU67HQU3Mw~EXYf5dM3vu6xjknhYudrj1FoLmM6pYm7TuiY84lxFjoTVO~TWHgFfaZHxTywxX~y~Yjs9fBDCMO0SRtkHoUmne9LUA",
    "https://s3-alpha-sig.figma.com/img/0fd6/fd6a/f5a5aec48a075fdd1330345dda9122bd?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BsdhOSutPVhGgYQoOO0KOgQOo0kygCjvXNQJ~XEoNzFF803fl-DYpptTmuyVg6HsErMKscvB4-yvF0I0w7XxtcU3LHnqJox74Ny~qqPCss5mt5NUpRWowjxW3b90tEwUro8oILFtBUhnRpipwL1uVR7-6mNkwZQP5WSyHlWXADZUsHi9G5-e6iI7oysKejKAz6sCp5EPqgrB0cuxzMDSeVRh28UCDhZs87237Juldx-zI6b90ZNjCFGmc0ekHd75DsfKxRc0QWo-HuxC18JRYOfV~MNgKxyHQCtj5yGGil~pfWqRz8OkNFTc83u7LhromkLbaKZzItRD44sEtjqgUg",
    "https://s3-alpha-sig.figma.com/img/93da/0269/86bab6eca8d932a434fb06e3695ce5e7?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HEVdf~K6isZG8GErX-R1ICNIVgsjcBQT5pvzqo8cngeMj3vsxbWbGz6DHppv0PlsVbKZu~37gPULSdFP8l8lEuLlBzR6qIQ25JZPWCfxpoQpWjQf8QhMHCrYJVzJkSxNiK1Pc4IKumz1TPYHQREHzYiBlyKH0x~Ez9WRAg2~iNIi9JWvI7-sdRZ04Y9q9hyYc56nwbOX35nivIdZoCA4~zO0FrwUtBxJx3pkmMXVvfuWB4fW8PW-gMrGxIQpdEwVSO-k5zshR6JKI3FHtejswH~ZfSe2aGOJK95MxdR3oIQlYaE5bgzHPISd5WWNIJ5eROEP1iXxgaYJOcNUAm-FZA",
    "https://s3-alpha-sig.figma.com/img/8d41/50d5/6c6273d56b17b2dfae7039ecb98de59d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGxJKtSbHR7~5datxVE7NnJT6FoZsS9IKCBqiQ9-iComVkVRBaw0Ic-QD9WpJ2Zio~wH3TjaU37UGLMGtaAfda-j4~uOV7mHTmANwN85PSh1OGAE9Fr1Leki88l1Td9Gq5Y0komipPAtKhXtrVD6z4sopxOh6k4Ib7E3F8Qa1IWHcdQw8OHtP-T1tSoF5POkZ87UF37jDS0h6aghg-9MaIfp2y4Bxmspp5-AZ6XvTQV93aJqTTsCImSz18QbKkXNUoctYirdvcVznB7Y4HmAqo1PZkvRMFuv0-SY62cQ8jKIY70RkE~~IzlKyX0LgYKwFsPFl4Ve1FB2JIChF-dZNw",
    "https://s3-alpha-sig.figma.com/img/97bc/481a/13729a676738598497da809d51f9f91d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AhrjRYRYQFXDjXQlX6Y-GMm~m9q7ch5fXtjC1efTqP3my20h3ykN1SBwAaw0lyxdYvmhjcrvZpW6L5KqKW0pkSMF2PlpEDThcW0hROcFERT8lTC9yiuUsPxMCXO0J473xobi1WdrPA5aiq7TOJUjOaqPtBpNiR8Y7RioBarXP8y032489BWYckHAvOH7Q~cDIbH0jmfmzCalYw7kfX1MLSRUDfvWbC~efq8sn0Wgq5ULsoZ36xAxIrgP7xUA1cUOHtmAp2WAoU~bJgpxu4OUeEeoTsmC2NPi1GXLVMdZ8bRxx1bGu6bdFaa7JxsZ~B3Ejo9a~1gSBYxl-D23X6~AcA",
    "https://s3-alpha-sig.figma.com/img/f410/5de7/2bc2c1d78f6553034df182ab879faf82?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSHhfwG0DN1jRZ0JcB1kMSNkFQHm1RlkpvwNv1nfyQRhqZGcnAgG75WsoFDQeGv57JdZ8FZlwS57W0-5pbIPY5-wtwRs19fEc4xuM96hYoddjx2d0ICiTS2WQcR1KJTHLBiupyY0CMGRgab7V9UjMwr5WswT8BYMiK8k80JydOcaJhjpFPBL2UySueFbvxghU6IRXSY8W0kSS2CI4~9zkdCqIKThwmwQCJ~1d5lWBWsDJRHOV9jLGeXhqleho-AeDjg93wc0o9wUcgbcFzIyNwtaVYjljPppMzXOfqpEKeS7qgIY-XN~zU85kvUOfio3uFW7~WSCxBQGsdPE8ktpEw",
]

interface AvatarChooseFieldProps {
    setAvatarUrl: (avatar: string) => void
}

export function ChooseAvatarField({ setAvatarUrl }: AvatarChooseFieldProps) {
    const [clickedAvatar, setClickedAvatar] = React.useState<string>('')
    const handleAvatarClick = (avatar: string, index: number) => {
        setAvatarUrl(avatar)
        setClickedAvatar(avatar + index)
    }


    return (
        <div className=' text-center flex flex-col justify-center '>
            <h1 className=' m-3 text-3xl text-[#00222E]'>Choose Your avatar</h1>
            <ScrollArea className='w-[512px] h-[396px] m-auto'>
                <div
                    className='avatar grid  place-items-center  grid-cols-4 gap-4 p-8 rounded-[8px] border-1/2  bg-[#F1FBFF]'
                >
                    {
                        avatarsUrl.map((avatarUrl, index) => (
                            <div
                                onClick={() => handleAvatarClick(avatarUrl, index)}
                                key={avatarUrl + index}
                                className={cn('relative cursor-pointer rounded-md h-[107px] w-[107px]',
                                )}>
                                <Image
                                    src={avatarUrl}
                                    layout="fill"
                                    objectFit="cover"
                                    className={cn("rounded-md transition-all",
                                        clickedAvatar === avatarUrl + index ? 'border-[#00658B] border-[5px]' : ''
                                    )}
                                    alt="avatar"
                                />
                            </div>
                        ))
                    }
                </div>
            </ScrollArea>
            <Button
              type="submit"
              className="w-full my-4 bg-[#FFD43B] hover:bg-[#FFC107] text-black font-semibold py-2 rounded-md"
            >
              Save Changes
            </Button>
        </div>
    )
}
