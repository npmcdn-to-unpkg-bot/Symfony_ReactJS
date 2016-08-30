<?php

namespace AppBundle\Controller\Web;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class BlogController extends Controller
{
    /**
     * @Route("/blog/add/article", name="blog_add_article")
     * @Template("UI/Form/add_article.html.twig")
     *
     * @param Request $request
     *
     * @return array
     */
    public function addArticle(Request $request)
    {
        $article = $this->get('core.blog')->createArticle($request);

        if ($article->isValid()) {
            return $this->redirectToRoute('homepage');
        }

        return array('article' => $article->createView());
    }
}
