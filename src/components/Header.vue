<template>
    <div class="component-container navbar navbar-default">
      <nav class="container-fluid">
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav mr-auto">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          </ul>
          <ul class="nav navbar-nav mr-auto">
            <li><a href="#">End Day</a></li>
            <li class="dropdown">
              <a href="#" 
                class="dropdown-toggle" 
                role="button" 
                aria-haspopup="true"
                aria-expanded="false"
                >Save & Load<span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Save Data</a></li>
                <li><a href="#">Load Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</template>
