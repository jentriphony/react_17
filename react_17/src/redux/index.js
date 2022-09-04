import { configureStore } from '@reduxjs/toolkit'
import { uiSliceReducer as indexUiSliceReducer } from './ui/ui'
import { urlsSliceReducer as indexFetchUrlsSliceReducer } from './fetch/urls'
import { urlsSliceReducer as indexPagesUrlsSliceReducer } from './pages/urls'
import { initialSliceReducer as indexInitialSliceReducer } from './initial/initial'
import { commentsSliceReducer } from './pages/comments/comments'
import { quotesSliceReducer } from './pages/quotes/quotes'



const store = configureStore({
  reducer: {
    indexUi: indexUiSliceReducer,
    indexFetchUrls: indexFetchUrlsSliceReducer,
    indexPagesUrls: indexPagesUrlsSliceReducer,
    indexInitial: indexInitialSliceReducer,
    comments: commentsSliceReducer,
    quotes: quotesSliceReducer
  }
})



export default store