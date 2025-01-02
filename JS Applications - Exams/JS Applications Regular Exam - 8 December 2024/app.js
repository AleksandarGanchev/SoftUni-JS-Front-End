import page from "./node_modules/page/page.mjs";

import { navigationVIew } from "./src/auth.js";
import { addRender } from "./src/middlewares/render.js";
import { homePage } from "./src/pages/homePage.js";
import { registerPage } from "./src/pages/registerPage.js";
import { marketplacePage } from "./src/pages/marketplacePage.js";
import { loginPage } from "./src/pages/loginPage.js";
import { logoutPage } from "./src/pages/logoutPage.js";
import { detailsPage } from "./src/pages/detailsPage.js";
import { sellPage } from "./src/pages/sellPage.js";
import { editPage } from "./src/pages/editPage.js";
import { deletePage } from "./src/pages/deletePage.js";

page(addRender);
page(navigationVIew);
page('/', homePage);
page('/marketplace', marketplacePage);
page('/sell', sellPage);
page('/logout', logoutPage)
page('/login', loginPage);
page('/register', registerPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage)
page('/delete/:id', deletePage)

page.start();

