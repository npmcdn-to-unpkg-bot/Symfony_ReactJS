<?php

namespace AppBundle\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class HomeController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @Template("AppBundle/Index/index.html.twig")
     * @Method("GET")
     */
    public function indexAction(){}

    /**
     * @Route("/contact", name="contact")
     * @Template("AppBundle/contact.html.twig")
     * @Method("GET")
     */
    public function contactAction(){}

    /**
     * @Route("/blog", name="blog")
     * @Template("AppBundle/blog.html.twig")
     */
    public function BlogAction(){}
}
