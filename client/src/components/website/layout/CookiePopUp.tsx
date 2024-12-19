"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useEffect, useState, useTransition } from "react";

export default function CookiePopUp() {
  const [show, setShow] = useState(false);
  const t = useTranslations("cookie");
  function checkCookie_eu() {
    const consent = getCookie("cookies_consent");

    if (consent == null || consent == "" || consent == undefined) {
      // show notification bar
      setShow(true);
    }
  }
  // @ts-ignore
  //   function setCookie_eu(c_name, value, exdays) {
  //     var exdate = new Date();
  //     exdate.setDate(exdate.getDate() + exdays);
  //     var c_value =
  //       escape(value) +
  //       (exdays == null ? "" : "; expires=" + exdate.toUTCString());
  //     document.cookie = c_name + "=" + c_value + "; path=/";

  //     setShow(false);
  //   }
  function setCookie(c_name, value, exdays) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    const c_value =
      encodeURIComponent(value) +
      (exdays ? `; expires=${exdate.toUTCString()}` : "");
    document.cookie = `${c_name}=${c_value}; path=/`;
    setShow(false);
  }

  // @ts-ignore
  //   function getCookie_eu(c_name) {
  //     let i,
  //       x,
  //       y,
  //       ARRcookies = document.cookie.split(";");
  //     for (i = 0; i < ARRcookies.length; i++) {
  //       x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
  //       y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
  //       x = x.replace(/^\s+|\s+$/g, "");
  //       if (x == c_name) {
  //         return unescape(y);
  //       }
  //     }
  //   }
  function getCookie(c_name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === c_name) {
        return decodeURIComponent(value);
      }
    }
    return null; // Return null if the cookie is not found
  }

  useEffect(() => {
    checkCookie_eu();
  }, []);
  return (
    <div
      id="cookie_directive_container"
      className={`${show ? "block" : "hidden"}`}
    >
      <div className="cookieBottom">
        <div className="container-fluid">
          <ul>
            <li>
              <div className="cookieBottom-title">{t("popTitle")}</div>

              <div className="cookie-content">
                <p>
                  {t("p-1")} <Link href="/cookie-policy">{t("link")}</Link>
                </p>
                <p>{t("p-2")}</p>
              </div>
            </li>
            <li>
              <button
                id="cookie_accept"
                className="border border-white p-2 rounded-xl hover:bg-white transition-all hover:text-black"
                onClick={() => setCookie("cookies_consent", 1, 30)}
              >
                {t("button")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
