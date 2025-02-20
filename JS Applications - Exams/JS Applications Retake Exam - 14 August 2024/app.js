import page from "./node_modules/page/page.mjs"

import { navigationBar } from "./src/middlewares/auth.js";
import { addRender } from "./src/middlewares/render.js";
import { homePage } from "./src/pages/homePage.js";
import { loginPage } from "./src/pages/loginPage.js";
import { registerPage } from "./src/pages/registerPage.js";
import { logoutPage } from "./src/pages/logoutPage.js";
import { tvShowsPage } from "./src/pages/tvShowsPage.js";
import { searchPage } from "./src/pages/searchPage.js";
import { addShowPage } from "./src/pages/addShowPage.js";
import { detailsPage } from "./src/pages/detailsPage.js";
import { editPage } from "./src/pages/editPage.js";
import { deletePage } from "./src/pages/deletePage.js";



page(addRender);
page(navigationBar);
page('/', homePage);
page('/register', registerPage)
page('/login', loginPage);
page('/logout', logoutPage);
page('/tvshows', tvShowsPage);
page('/search', searchPage);
page('/addshow', addShowPage);
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/delete/:id', deletePage)

page.start();


