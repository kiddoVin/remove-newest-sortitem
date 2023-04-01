import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import IndexPage from 'flarum/components/IndexPage'


app.initializers.add('kiddo/remove-newest', () => {
  extend(IndexPage.prototype, 'oncreate', function () {
    this.$(".item-sort").children("div").children("ul").children("li")[2].remove();
  });
});
