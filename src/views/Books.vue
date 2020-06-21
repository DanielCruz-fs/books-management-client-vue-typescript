<template>
  <div id="books">
    <div class="row" v-if="myBooks.length">
    <Book @deleted="getAllBooks()" v-for="b in myBooks" :book="b" :key="b.id"></Book>
    </div>
    <div class="row d-flex justify-content-center" v-else>
      <div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BookModel } from '@/models/BookModel';
import BookService from '@/services/BookService';
import Book from '@/components/Book.vue';

const bookService = new BookService();

@Component({
  name: 'Books',
  components: { Book },
})
export default class Books extends Vue {
  // data
  myBooks: BookModel[] = [];

  // computed properties
  get bookCount() {
    return this.myBooks.length;
  }

  // props
  // methods
  getAllBooks() {
    bookService.getAllBooks()
               .then(
                  // data => console.log(data)
                  (data) => (this.myBooks = data)
                )
                .catch((err) => console.log(err));
  }
  // lifecycle hooks
  created() {
    this.getAllBooks();
  }
  // watchers
}
</script>

<style></style>
