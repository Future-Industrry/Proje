import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { Grid } from "gridjs-react";
import { h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import ReactDOMServer from "react-dom/server";
import {
  Trash2,
  Crown,
  ShieldMinus,
  ShieldUser,
  CodeXml,
  Check,
  Eye,
} from "lucide-react";
import { TbEditCircle } from "react-icons/tb";

const articles = [
  {
    field: 0,
    id: 34556,
    title: "هوش مصنوعی و معایب آن",
    author: "علی",
    image: "project1.png",
  },
  {
    field: 1,
    id: 97834,
    title: "هوش مصنوعی و معایب آن",
    author: "mmd",
    image: "project2.png",
  },
  {
    field: 2,
    id: 32314,
    title: "هوش مصنوعی و معایب آن",
    author: "sara",
    image: "project3.png",
  },
  {
    field: 3,
    id: 47809,
    title: "هوش مصنوعی و معایب آن",
    author: "mahdi",
    image: "project4.png",
  },
  {
    field: 4,
    id: 35345,
    title: "هوش مصنوعی و معایب آن",
    author: "zahra",
    image: "project5.png",
  },
  {
    field: 5,
    id: 60881,
    title: "هوش مصنوعی و معایب آن",
    author: "omid",
    image: "project6.png",
  },
  {
    field: 6,
    id: 78762,
    title: "هوش مصنوعی و معایب آن",
    author: "mahtab",
    image: "project7.png",
  },
];


export default function Articles() {
  const [isOpen, setIsOpen] = useState(1);
    const renderIcon = (Icon) =>
      ReactDOMServer.renderToString(<Icon size={18} />);

  return (
    <>
      <div className="flex bg-white dark:bg-dark  text-black dark:text-white">
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div
          className={`${
            isOpen ? "w-[100%] lg:w-[80%] xl:w-[83%] " : "w-[100%]"
          } `}
        >
          <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
           <div className="px-5">
            <div className="text-right">
              <Grid
                data={articles.map((a) => [
                  a.field + 1,
                  a.title,
                  a.author,
                  a.id,
                ])}
                columns={[
                  "ردیف",
                  "موضوع مقاله",
                  "نویسنده",
                  {
                    name: "عملیات",
                    formatter: (_, row) => {
                      const id = row.cells[3].data; // ستون id

                      return h("div", { className: "flex gap-2" }, [
                        h(
                          "button",
                          {
                            className:
                              "p-2 rounded cursor-pointer text-[.8rem] bg-yellow-500 text-white hover:bg-yellow-600",
                            onClick: () => alert("ویرایش مقاله با ID: " + id),
                            title: "ئیرایش",
                          },
                          h("span", {
                            dangerouslySetInnerHTML: {
                              __html: renderIcon(TbEditCircle),
                            },
                          })
                        ),
                        h(
                          "button",
                          {
                            className:
                              "p-2 rounded cursor-pointer text-[.8rem] bg-red-500 text-white hover:bg-red-600",
                            onClick: () => alert("بن کاربر با ID: " + id),
                            title: "رد کردن پروژه",
                          },
                          h("span", {
                            dangerouslySetInnerHTML: {
                              __html: renderIcon(Trash2),
                            },
                          })
                        ),
                        h(
                          "button",
                          {
                            className:
                              "p-2 rounded cursor-pointer text-[.8rem] bg-gray-500 text-white hover:bg-gray-600",
                            onClick: () => alert("بن کاربر با ID: " + id),
                            title: "مشاهده کردن",
                          },
                          h("span", {
                            dangerouslySetInnerHTML: {
                              __html: renderIcon(Eye),
                            },
                          })
                        ),
                      ]);
                    },
                  },
                ]}
                search={true}
                pagination={{ enabled: true, limit: 5 }}
                sort={true}
                language={{
                  search: {
                    placeholder: "جستجو...",
                  },
                  pagination: {
                    previous: "قبلی",
                    to: "تا",
                    of: "از",
                    next: "بعدی",
                    showing: "نمایش",
                    results: () => "رکورد",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
