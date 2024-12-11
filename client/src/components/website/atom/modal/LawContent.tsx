import { useTranslations } from "next-intl"
export default function LawContent({law}:any){
    
    const t = useTranslations(law=='th'?'modal.law.th':'modal.law.jp')
    return (
        <>
            {law=='jp' && <>
                <p>{t("1")}</p>
                <p>{t("2")}</p>
                <p>{t("3")}</p>
                <p className="mt-3">{t("4")}</p>
                <p>{t("5")}</p>
                <p>{t("6")}</p>
                <p>{t("7")}</p>
                <p className="mt-3">{t("8")}</p>
            </>}
            {law=='th' && <>
                <p>{t("1")}</p>
                <p>{t("2")}</p>
                <p>{t("3")}</p>
            </>}
        </>
    )
}