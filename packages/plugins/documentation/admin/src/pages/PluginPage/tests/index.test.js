import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, lightTheme } from '@strapi/design-system';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import PluginPage from '../index';
import server from './server';

jest.mock('@strapi/helper-plugin', () => ({
  ...jest.requireActual('@strapi/helper-plugin'),
  useNotification: jest.fn(() => () => {}),
  CheckPermissions: jest.fn(({ children }) => children),
}));

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const makeApp = (history) => (
  <Router history={history}>
    <ThemeProvider theme={lightTheme}>
      <QueryClientProvider client={client}>
        <IntlProvider locale="en" messages={{}} textComponent="span">
          <PluginPage />
        </IntlProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </Router>
);

describe('Plugin | Documentation | PluginPage', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should show a loader when fetching data', () => {
    const history = createMemoryHistory();
    const App = makeApp(history);
    render(App);

    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should show a list of versions', async () => {
    const history = createMemoryHistory();
    const App = makeApp(history);
    const {
      container: { firstChild },
    } = render(App);

    await waitFor(() => expect(screen.getByText('1.0.0')).toBeInTheDocument());

    expect(firstChild).toMatchInlineSnapshot(`
      .c1 {
        padding-bottom: 56px;
      }

      .c4 {
        background: #f6f6f9;
        padding-top: 40px;
        padding-right: 56px;
        padding-bottom: 40px;
        padding-left: 56px;
      }

      .c6 {
        min-width: 0;
      }

      .c10 {
        background: #4945ff;
        padding: 8px;
        padding-right: 16px;
        padding-left: 16px;
        border-radius: 4px;
        border-color: #4945ff;
        border: 1px solid #4945ff;
        cursor: pointer;
      }

      .c16 {
        padding-right: 56px;
        padding-left: 56px;
      }

      .c17 {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
      }

      .c19 {
        position: relative;
      }

      .c21 {
        padding-right: 24px;
        padding-left: 24px;
      }

      .c30 {
        width: 50%;
      }

      .c33 {
        background: #ffffff;
        padding: 8px;
        border-radius: 4px;
        border-width: 0;
        border-color: #dcdce4;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }

      .c5 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c7 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      .c11 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 8px;
      }

      .c32 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: end;
        -webkit-justify-content: end;
        -ms-flex-pack: end;
        justify-content: end;
      }

      .c34 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c9 {
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.25;
        color: #32324d;
      }

      .c14 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        color: #ffffff;
      }

      .c15 {
        font-size: 1rem;
        line-height: 1.5;
        color: #666687;
      }

      .c27 {
        font-weight: 600;
        font-size: 0.6875rem;
        line-height: 1.45;
        text-transform: uppercase;
        color: #666687;
      }

      .c31 {
        font-size: 0.875rem;
        line-height: 1.43;
        color: #32324d;
      }

      .c12 {
        position: relative;
        outline: none;
      }

      .c12 svg {
        height: 12px;
        width: 12px;
      }

      .c12 svg > g,
      .c12 svg path {
        fill: #ffffff;
      }

      .c12[aria-disabled='true'] {
        pointer-events: none;
      }

      .c12:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c12:focus-visible {
        outline: none;
      }

      .c12:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c36 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c13 {
        height: 2rem;
      }

      .c13[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c13[aria-disabled='true'] .c8 {
        color: #666687;
      }

      .c13[aria-disabled='true'] svg > g,.c13[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c13[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c13[aria-disabled='true']:active .c8 {
        color: #666687;
      }

      .c13[aria-disabled='true']:active svg > g,.c13[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c13:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c13:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c13 svg > g,
      .c13 svg path {
        fill: #ffffff;
      }

      .c35 svg > g,
      .c35 svg path {
        fill: #8e8ea9;
      }

      .c35:hover svg > g,
      .c35:hover svg path {
        fill: #666687;
      }

      .c35:active svg > g,
      .c35:active svg path {
        fill: #a5a5ba;
      }

      .c35[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c0 {
        display: grid;
        grid-template-columns: 1fr;
      }

      .c2 {
        overflow-x: hidden;
      }

      .c3:focus-visible {
        outline: none;
      }

      .c18 {
        overflow: hidden;
        border: 1px solid #eaeaef;
      }

      .c23 {
        width: 100%;
        white-space: nowrap;
      }

      .c20:before {
        background: linear-gradient(90deg,#c0c0cf 0%,rgba(0,0,0,0) 100%);
        opacity: 0.2;
        position: absolute;
        height: 100%;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
        width: 8px;
        left: 0;
      }

      .c20:after {
        background: linear-gradient(270deg,#c0c0cf 0%,rgba(0,0,0,0) 100%);
        opacity: 0.2;
        position: absolute;
        height: 100%;
        box-shadow: 0px 1px 4px rgba(33,33,52,0.1);
        width: 8px;
        right: 0;
        top: 0;
      }

      .c22 {
        overflow-x: auto;
      }

      .c29 tr:last-of-type {
        border-bottom: none;
      }

      .c24 {
        border-bottom: 1px solid #eaeaef;
      }

      .c25 {
        border-bottom: 1px solid #eaeaef;
      }

      .c25 td,
      .c25 th {
        padding: 16px;
      }

      .c25 td:first-of-type,
      .c25 th:first-of-type {
        padding: 0 4px;
      }

      .c25 th {
        padding-top: 0;
        padding-bottom: 0;
        height: 3.5rem;
      }

      .c26 {
        vertical-align: middle;
        text-align: left;
        color: #666687;
        outline-offset: -4px;
      }

      .c26 input {
        vertical-align: sub;
      }

      .c28 svg {
        height: 0.25rem;
      }

      <div
        class="c0"
      >
        <div
          class="c1 c2"
        >
          <main
            aria-busy="false"
            aria-labelledby="main-content-title"
            class="c3"
            id="main-content"
            tabindex="-1"
          >
            <div
              style="height: 0px;"
            >
              <div
                class="c4"
                data-strapi-header="true"
              >
                <div
                  class="c5"
                >
                  <div
                    class="c6 c7"
                  >
                    <h1
                      class="c8 c9"
                    >
                      Documentation
                    </h1>
                  </div>
                  <button
                    aria-disabled="false"
                    class="c10 c11 c12 c13"
                    type="button"
                  >
                    <div
                      aria-hidden="true"
                      class=""
                    >
                      <svg
                        fill="none"
                        height="1rem"
                        viewBox="0 0 24 24"
                        width="1rem"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"
                          fill="#212134"
                        />
                        <path
                          clip-rule="evenodd"
                          d="M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z"
                          fill="#212134"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <span
                      class="c8 c14"
                    >
                      Open Documentation
                    </span>
                  </button>
                </div>
                <p
                  class="c8 c15"
                >
                  Configure the documentation plugin
                </p>
              </div>
            </div>
            <div
              class="c16"
            >
              <div
                class="c17 c18"
              >
                <div
                  class="c19 c20"
                >
                  <div
                    class="c21 c22"
                  >
                    <table
                      aria-colcount="4"
                      aria-rowcount="3"
                      class="c23"
                      role="grid"
                    >
                      <thead
                        class="c24"
                      >
                        <tr
                          aria-rowindex="1"
                          class="c25"
                        >
                          <th
                            aria-colindex="1"
                            class="c26"
                            role="gridcell"
                            tabindex="0"
                          >
                            <div
                              class="c7"
                            >
                              <span
                                class="c8 c27"
                              >
                                Version
                              </span>
                              <span
                                class="c28"
                              />
                            </div>
                          </th>
                          <th
                            aria-colindex="2"
                            class="c26"
                            role="gridcell"
                            tabindex="-1"
                          >
                            <div
                              class="c7"
                            >
                              <span
                                class="c8 c27"
                              >
                                Last Generated
                              </span>
                              <span
                                class="c28"
                              />
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        class="c29"
                      >
                        <tr
                          aria-rowindex="2"
                          class="c25"
                        >
                          <td
                            aria-colindex="1"
                            class="c30 c26"
                            role="gridcell"
                            tabindex="-1"
                          >
                            <span
                              class="c8 c31"
                            >
                              1.2.0
                            </span>
                          </td>
                          <td
                            aria-colindex="2"
                            class="c30 c26"
                            role="gridcell"
                            tabindex="-1"
                          >
                            <span
                              class="c8 c31"
                            />
                          </td>
                          <td
                            aria-colindex="3"
                            class="c26"
                            role="gridcell"
                          >
                            <div
                              aria-hidden="true"
                              class="c32"
                              role="button"
                            >
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="2"
                                  class="c33 c34 c12 c35"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <span
                                    class="c36"
                                  >
                                    Open 1.2.0
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"
                                      fill="#212134"
                                    />
                                    <path
                                      clip-rule="evenodd"
                                      d="M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z"
                                      fill="#212134"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="3"
                                  class="c33 c34 c12 c35"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <span
                                    class="c36"
                                  >
                                    Regenerate 1.2.0
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clip-rule="evenodd"
                                      d="M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z"
                                      fill="#212134"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="4"
                                  class="c33 c34 c12 c35"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <span
                                    class="c36"
                                  >
                                    Delete 1.2.0
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.236 6.149a.2.2 0 0 0-.197.233L6 24h12l2.96-17.618a.2.2 0 0 0-.196-.233H3.236ZM21.8 1.983c.11 0 .2.09.2.2v1.584a.2.2 0 0 1-.2.2H2.2a.2.2 0 0 1-.2-.2V2.183c0-.11.09-.2.2-.2h5.511c.9 0 1.631-1.09 1.631-1.983h5.316c0 .894.73 1.983 1.631 1.983H21.8Z"
                                      fill="#32324D"
                                    />
                                  </svg>
                                </button>
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr
                          aria-rowindex="3"
                          class="c25"
                        >
                          <td
                            aria-colindex="1"
                            class="c30 c26"
                            role="gridcell"
                            tabindex="-1"
                          >
                            <span
                              class="c8 c31"
                            >
                              1.0.0
                            </span>
                          </td>
                          <td
                            aria-colindex="2"
                            class="c30 c26"
                            role="gridcell"
                            tabindex="-1"
                          >
                            <span
                              class="c8 c31"
                            />
                          </td>
                          <td
                            aria-colindex="3"
                            class="c26"
                            role="gridcell"
                          >
                            <div
                              aria-hidden="true"
                              class="c32"
                              role="button"
                            >
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="5"
                                  class="c33 c34 c12 c35"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <span
                                    class="c36"
                                  >
                                    Open 1.0.0
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.2 12a3.2 3.2 0 1 1-6.399 0 3.2 3.2 0 0 1 6.4 0Z"
                                      fill="#212134"
                                    />
                                    <path
                                      clip-rule="evenodd"
                                      d="M18.78 6.103c1.923 1.243 3.64 2.981 4.963 5.027a1.61 1.61 0 0 1 .005 1.738c-1.318 2.063-3.031 3.807-4.954 5.046-2.12 1.364-4.475 2.086-6.81 2.086-2.388 0-4.683-.7-6.816-2.082-1.894-1.225-3.593-2.966-4.914-5.032a1.596 1.596 0 0 1 .032-1.777C1.89 8.811 3.734 7.027 5.77 5.805 7.767 4.608 9.858 4 11.984 4c2.317 0 4.667.728 6.795 2.103Zm-9.446 9.888a4.8 4.8 0 1 0 5.334-7.982 4.8 4.8 0 0 0-5.334 7.982Z"
                                      fill="#212134"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </span>
                              <span>
                                <button
                                  aria-disabled="false"
                                  aria-labelledby="6"
                                  class="c33 c34 c12 c35"
                                  tabindex="-1"
                                  type="button"
                                >
                                  <span
                                    class="c36"
                                  >
                                    Regenerate 1.0.0
                                  </span>
                                  <svg
                                    aria-hidden="true"
                                    fill="none"
                                    focusable="false"
                                    height="1rem"
                                    viewBox="0 0 24 24"
                                    width="1rem"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      clip-rule="evenodd"
                                      d="M15.681 2.804A9.64 9.64 0 0 0 11.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 0 0 3.589-4.831 1.117 1.117 0 0 0-.664-1.418 1.086 1.086 0 0 0-1.393.676 7.769 7.769 0 0 1-2.792 3.758 7.546 7.546 0 0 1-4.41 1.428V4.222h.002a7.492 7.492 0 0 1 3.003.625 7.61 7.61 0 0 1 2.5 1.762l.464.551-2.986 3.042a.186.186 0 0 0 .129.316H22V3.317a.188.188 0 0 0-.112-.172.179.179 0 0 0-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 0 0-3.239-2.293Zm-3.863 1.418V2v2.222Zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778Z"
                                      fill="#212134"
                                      fill-rule="evenodd"
                                    />
                                  </svg>
                                </button>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    `);
  });
});
