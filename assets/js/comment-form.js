//www.blogger.com/static/v1/jsbin/3491142858-comment_from_post_iframe.js
      $(document).ready(function() {
        //$('.comment-form').addClass('spinner').addClass('load')
        $('.comment-form').append("<div class='commentForm'><iframe scrolling='no' allowtransparency='allowtransparency' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' id='comment-editor' name='comment-editor' src='' width='100%'></iframe></div>")
          $.getScript('//cdn.jsdelivr.net/gh/ensikology/redvision@56ace11/assets/js/comment_iframe.js').done(function () {
            BLOG_CMT_createIframe('//www.blogger.com/rpc_relay.html')
            //$('.comment-form').removeClass('spinner').removeClass('load')     
          })
      })
